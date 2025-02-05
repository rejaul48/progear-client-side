import React, { useContext, useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SportsContext } from '../../contextApi/SportsContext'
import Swal from 'sweetalert2'
import { Tooltip } from 'react-tooltip';
import Lottie from 'lottie-react'
import loaderAnimation from './../../lottie_Animation/loader_animation.json'
import { Helmet } from 'react-helmet'

const MyEquepment = () => {

    const [myEquipment, setMyEquipment] = useState([])
    const [loading, setLoading] = useState(true) // Step 1: Add loading state
    const { users, theme } = useContext(SportsContext)

    useEffect(() => {
        if (users?.email) {
            setLoading(true) // Set loading to true when fetch starts

            fetch(`https://assignment-10-server-mu-three.vercel.app/products/${users?.email}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log('Fetched Data:', data);
                    setMyEquipment(data);
                })
                .catch((err) => console.error('Error:', err))
                .finally(() => {
                    setLoading(false)
                });
        }
    }, [users])

    // Product delete from database

    const handleProductDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this product?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete",
        }).then((result) => {
            if (result.isConfirmed) {
                // Proceed with deletion
                fetch(`https://assignment-10-server-mu-three.vercel.app/products/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your product has been deleted.",
                            icon: "success",
                        });

                        // Update the state to reflect deletion
                        const remain = myEquipment.filter(single => single?._id !== id);
                        setMyEquipment(remain);
                        console.log(data);
                    })
                    .catch((err) => console.log(err));
            } else {
                // Optionally handle cancellation
                console.log("User canceled the deletion.");
            }
        });
    };


    return (
        <>

            <Helmet >
                <title>ProGear || My Equipment</title>
            </Helmet>

            {/* Loading Spinner */}
            {loading ? (
                <div className="flex justify-center items-center h-[100vh] absolute inset-0 bg-white z-50">
                    <Lottie animationData={loaderAnimation} loop={true} className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%] h-auto"></Lottie>
                </div>
            ) : (
                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mb-12 w-full max-w-7xl mx-auto px-4 xl:px-0'>
                    {
                        myEquipment.length > 0 ? (
                            myEquipment.map(product => (
                                <div className={`shadow-lg p-5 ${theme === 'dark' && 'border-2 border-white rounded-lg'}`} key={product?._id}>
                                    {/* Product img */}
                                    <div className='h-[230px]'>
                                        <img data-tooltip-id="myProduct" data-tooltip-content={product?.itemName}

                                            className='w-full h-full object-cover' src={product?.photoURL} alt="product img" />
                                        <Tooltip id="myProduct" />
                                    </div>
                                    <div>
                                        <h2 className='mt-2 text-xl font-bold my-2'>{product?.itemName}</h2>
                                        <div className='flex justify-between items-center'>
                                            <h3 className='font-semibold'>{product?.categoryName}</h3>
                                            <p>Price: ${product?.price}</p>
                                        </div>
                                        <div>
                                            <h2 className='flex items-center gap-1 font-semibold mt-1'>Rating:
                                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                                <p>({product?.rating})</p>
                                            </h2>
                                        </div>
                                        <div className='flex justify-center items-center gap-5 mt-5'>
                                            <div>
                                                <Link
                                                    data-tooltip-id="productUpdate" data-tooltip-content="Do you wanna Update"
                                                    to={`/updateitem/${product?._id}`} className='btn bg-slate-600 hover:bg-slate-700 text-white rounded-sm'>Update</Link>
                                                <Tooltip id="productUpdate" />
                                            </div>
                                            <div>
                                                <Link
                                                    data-tooltip-id="productDelete" data-tooltip-content="Do you wanna Delete"
                                                    onClick={() => { handleProductDelete(product?._id) }} className='btn bg-stone-700 hover:bg-stone-800 text-white rounded-sm'>Delete</Link>
                                                <Tooltip id="productDelete" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center h-[60vh] flex justify-center items-center">
                                <h2 className="lg:text-4xl font-bold text-red-500">You have no equipment yet. Please add some equipment!</h2>
                            </div>
                        )
                    }
                </section>
            )}
        </>
    )
}

export default MyEquepment
