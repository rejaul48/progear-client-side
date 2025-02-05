import React, { useContext, useEffect, useState } from 'react'
import { SportsContext } from '../../contextApi/SportsContext'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet'

const AddEquepment = () => {


    const { users, currentUser } = useContext(SportsContext)

    console.log(currentUser)
    console.log(currentUser.name)


    const handleAddedItem = e => {
        e.preventDefault()
        const form = e.target;

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

        const product = { photoURL, itemName, categoryName, price, rating, customization, processingTime, stockStatus, userName, userEmail, description }

        console.log(product)

        // send into database
        fetch('https://assignment-10-server-mu-three.vercel.app/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(data => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Product Add Into Database",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(data)
            })
            .catch(err => console.log(err))


    }

    return (
        <>

            <Helmet >
                <title>ProGear || AddEquipment Zone</title>
            </Helmet>

            <div className="flex justify-center items-center mt-2 px-3 xl:px-0">
                <div className="bg-white p-2 rounded-lg shadow-md w-full max-w-4xl border-2 mb-8">
                    <h2 className="text-2xl font-bold text-center mb-6">Add New Item</h2>
                    <form className="space-y-4" onSubmit={handleAddedItem}>

                        <div className='md:flex items-center  justify-between gap-5'>
                            {/* Image URL */}
                            <div className='w-full'>
                                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                                    Image URL
                                </label>
                                <input
                                    type="url"
                                    name="photoURL"
                                    placeholder='Img URL'
                                    required
                                    className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
                                    placeholder='Item Name'
                                    required
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
                                    name="categoryName"
                                    placeholder='Category Name'
                                    required
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
                                    name="price"
                                    placeholder='Price'
                                    required
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
                                    name="rating"
                                    placeholder='Rating'
                                    required
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
                                    name="customization"
                                    placeholder='Customization'
                                    required
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
                                    name="processingTime"
                                    placeholder='processing time'
                                    required
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
                                    name="stockStatus"
                                    placeholder='In-Stock/Out-Of-Stock'
                                    required
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
                                name="description"
                                rows="3"
                                placeholder='Product Description'
                                required
                                className="mt-1 block w-full p-2 border bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Add Item
                        </button>
                    </form>
                </div>
            </div>
        </>

    );
}

export default AddEquepment
