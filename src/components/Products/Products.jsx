
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';


const Products = () => {
    // Use the loader data to get the first 6 products
    const initialProducts = useLoaderData();

    // State to manage the loaded products and pagination
    const [products, setProducts] = useState(initialProducts);
    const [skip, setSkip] = useState(6);
    const [hasMore, setHasMore] = useState(true);
    const [limit, setLimit] = useState(3);



    // Function to fetch additional products when "Show More" is clicked
    const loadMoreProducts = async () => {
        const response = await fetch(`https://assignment-10-server-mu-three.vercel.app/products?skip=${skip}&limit=${limit}`);
        const newProducts = await response.json();

        // If less than 3 products are returned, we won't have more to load
        if (newProducts.length < limit) {
            setHasMore(false);
        }

        // Append the new products to the existing list
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);

        // Update skip to load the next batch of products
        setSkip((prevSkip) => prevSkip + limit);
    };

    return (
        <div>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {products.map((product) => (
                    <Product key={product?._id} product={product}></Product>
                ))}
            </section>

            {hasMore && (
                <div className='flex justify-center items-center mt-3'>
                    <button onClick={loadMoreProducts} className="btn bg-orange-300 hover:bg-orange-400 mt-4 rounded-sm">
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Products;
