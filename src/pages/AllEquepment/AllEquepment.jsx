
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const AllEquepment = () => {
    const [allProductData, setAllProductData] = useState([]);
    const [sortOption, setSortOption] = useState('default'); 

    useEffect(() => {
        fetch('https://assignment-10-server-mu-three.vercel.app/all_products')
            .then(res => res.json())
            .then(data => {
                setAllProductData(data);
            })
            .catch(err => console.log(err));
    }, []);

    // Sorting logic
    const handleSort = (option) => {
        let sortedData = [...allProductData];
        if (option === 'priceAsc') {
            sortedData.sort((a, b) => a.price - b.price);
        } else if (option === 'priceDesc') {
            sortedData.sort((a, b) => b.price - a.price);
        } else if (option === 'rating') {
            sortedData.sort((a, b) => b.rating - a.rating); 
        }
        setAllProductData(sortedData);
    };

    // Handle dropdown change
    const handleSortChange = (e) => {
        const option = e.target.value;
        setSortOption(option);
        handleSort(option);
    };

    return (
        <>

            <Helmet >
                <title>ProGear || AllEquipment Zone</title>
            </Helmet>

            <section className='w-full max-w-7xl mx-auto'>
                {/* Dropdown for sorting */}
                <div className="mb-4 flex justify-end">
                    <select 
                        className='select select-bordered w-48'
                        value={sortOption}
                        onChange={handleSortChange}
                    >
                        <option value="default">Sort by</option>
                        <option value="priceAsc">Price: Low to High</option>
                        <option value="priceDesc">Price: High to Low</option>
                        <option value="rating">Rating: High to Low</option>
                    </select>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* Table head */}
                        <thead>
                            <tr className='bg-sky-600 text-lg text-white'>
                                <th>Sl.</th>
                                <th>Items Name</th>
                                <th>Category Name</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allProductData && (
                                allProductData.map((product, ind) => (
                                    <tr key={product?._id} className='hover:bg-slate-500 hover:bg-opacity-40'>
                                        <th>{ind + 1}</th>
                                        <td>{product.itemName}</td>
                                        <td>{product.categoryName}</td>
                                        <td>${product.price}</td>
                                        <td>{product.rating}</td>
                                        <td>
                                            <Link to={`/details/${product?._id}`} className='btn bg-orange-500 bg-opacity-50 hover:bg-orange-500'>
                                                Details
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default AllEquepment;
