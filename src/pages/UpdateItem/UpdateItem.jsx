import React, { useContext } from 'react'
import { SportsContext } from '../../contextApi/SportsContext'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet'

const UpdateItem = () => {

    const { currentUser, users } = useContext(SportsContext)
    const updateProductData = useLoaderData()

    const handleUpdateProduct = e => {
        e.preventDefault()
        const form = e.target;

        // Collect form data
        const photoURL = form.photoURL.value;
        const itemName = form.itemName.value;
        const categoryName = form.categoryName.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = [form.customization.value];
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const description = form.description.value;

        // Prepare the update object
        const updateProduct = {
            photoURL,
            itemName,
            categoryName,
            price,
            rating,
            customization,
            processingTime,
            stockStatus,
            userName,
            userEmail,
            description
        }

        console.log(updateProduct); // Log the update product data for debugging

        // update product data into database
        fetch(`https://assignment-10-server-mu-three.vercel.app/products/${updateProductData?._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Product Information Updated",
                    showConfirmButton: false,
                    timer: 1500
                });

            })
            .catch(err => console.log(err))


    }





    return (
        <>

            <Helmet >
                <title>ProGear || Update Item</title>
            </Helmet>

            <div className="flex justify-center items-center  mt-2 px-3 xl:px-0">
                <div className="bg-white p-2 rounded-lg shadow-md w-full max-w-4xl border-2 mb-8">
                    <h2 className="text-2xl font-bold text-center mb-6">Update Product Information</h2>
                    <form className="space-y-4" onSubmit={handleUpdateProduct}>

                        <div className='md:flex items-center  justify-between gap-5'>
                            {/* Image URL */}
                            <div className='w-full'>
                                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                                    Image URL
                                </label>
                                <input
                                    type="url"
                                    name="photoURL"
                                    defaultValue={updateProductData?.photoURL}
                                    className="mt-1 block w-full p-2 border bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Item Name */}
                            <div className='w-full'>
                                <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">
                                    Item Name
                                </label>
                                <input
                                    type="text"
                                    name="itemName"
                                    defaultValue={updateProductData?.itemName}
                                    className="mt-1 block w-full p-2 border bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className='md:flex items-center  justify-between gap-5'>
                            {/* Category Name */}
                            <div className='w-full'>
                                <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
                                    Category Name
                                </label>
                                <input
                                    type="text"
                                    defaultValue={updateProductData?.categoryName}
                                    name="categoryName"
                                    className="mt-1 block w-full p-2 border bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Price */}
                            <div className='w-full'>
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                    Price
                                </label>
                                <input
                                    type="text"
                                    defaultValue={updateProductData?.price}
                                    name="price"
                                    className="mt-1 block w-full p-2 border bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className='md:flex items-center gap-5 justify-between'>
                            {/* Rating */}
                            <div className='w-full'>
                                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                                    Rating
                                </label>
                                <input
                                    type="text"
                                    defaultValue={updateProductData?.rating}
                                    name="rating"
                                    className="mt-1 block w-full p-2 border bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Customization */}
                            <div className='w-full'>
                                <label htmlFor="customization" className="block text-sm font-medium text-gray-700">
                                    Customization
                                </label>
                                <input
                                    type="text"
                                    defaultValue={updateProductData?.customization}
                                    name="customization"
                                    className="mt-1 block w-full p-2 border bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                        </div>

                        <div className='md:flex items-center gap-5 justify-between'>
                            {/* Processing Time */}
                            <div className='w-full'>
                                <label htmlFor="processingTime" className="block text-sm font-medium text-gray-700">
                                    Processing Time
                                </label>
                                <input
                                    type="text"
                                    defaultValue={updateProductData?.processingTime}
                                    name="processingTime"
                                    className="mt-1 block w-full p-2 border bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Stock Status */}
                            <div className='w-full'>
                                <label htmlFor="stockStatus" className="block text-sm font-medium text-gray-700">
                                    Stock Status
                                </label>
                                <input
                                    type="text"
                                    defaultValue={updateProductData?.stockStatus}
                                    name="stockStatus"
                                    className="mt-1 block w-full p-2 border bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className='md:flex items-center gap-5 justify-between'>
                            {/* User Email */}
                            <div className='w-full'>
                                <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">
                                    User Email
                                </label>
                                <input
                                    type="email"
                                    id="userEmail"
                                    name="userEmail"
                                    value={currentUser?.email || users?.email}
                                    readOnly
                                    className="mt-1 block w-full p-2 border border-gray-300 bg-gray-100 rounded-md shadow-sm"
                                />
                            </div>

                            {/* User Name */}
                            <div className='w-full'>
                                <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    value={currentUser?.name || users?.displayName}
                                    readOnly
                                    className="mt-1 block w-full p-2 border border-gray-300 bg-gray-100 rounded-md shadow-sm"
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                defaultValue={updateProductData?.description}
                                name="description"
                                rows="3"
                                className="mt-1 block w-full p-2 border bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Update Item
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default UpdateItem
