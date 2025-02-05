import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, useLoaderData } from 'react-router-dom'

const Details = () => {

    const selectProduct = useLoaderData()
    console.log(selectProduct)

    return (
        <>

            <Helmet >
                <title>ProGear || Product Details</title>
            </Helmet>

            {/* details page heading */}
            <section className='bg-black py-5'>
                <div className='text-white w-6/12 mx-auto text-center py-2'>
                    <h2 className='md:text-4xl lg:text-5xl font-bold'>{selectProduct?.itemName}</h2>
                    <p className='mt-5 tracking-wider text-sm md:text-lg'>"Your Satisfaction, Our Priority - Service Beyond Expectations!"</p>
                </div>
            </section>

            {/* product detials */}

            <section className='md:flex w-full mt-12'>

                {/* product img show here */}

                <div className='md:w-7/12 h-[350px] md:h-[550px] p-5 flex items-center justify-center bg-opacity-30'>
                    <img className='w-full h-full ' src={selectProduct?.photoURL} alt="product_img" />
                </div>


                {/* product some information show here */}
                <div className='md:w-5/12 p-4'>
                    <h2 className='text-xl md:text-3xl font-bold'>{selectProduct?.itemName}</h2>
                    <p className='md:text-xl font-bold text-amber-900 my-1'>${selectProduct?.price}</p>
                    <h2 className='md:text-xl font-bold'>Stock Status: <span className='md:text-2xl text-green-600'>{selectProduct?.stockStatus}</span></h2>
                    <div>
                        <h2 className='text-lg font-semibold my-1'>Select Quantity</h2>
                        <select className="select select-bordered w-full max-w-xs">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>

                    <div className='mt-12 space-y-2'>
                        <h2 className='text-lg font-semibold'>Category: <span className='font-light ml-1'>{selectProduct?.categoryName}</span></h2>
                        <h2 className='text-lg font-semibold'>Tags: <span className='font-light ml-1'>Exercise, Strength, treadmill</span></h2>
                        <p className='text-lg font-semibold'>Product ID: <span className='font-light ml-1 md:text-xs lg:text-lg'>{selectProduct?._id}</span></p>
                        <p className="text-lg font-semibold flex items-center">
                            Customization:
                            <span className="font-light ml-1 text-xs lg:text-lg ">
                                {selectProduct?.customization ? (
                                    selectProduct.customization.map((cusName, index) => (
                                        <span key={index} className="block">{cusName}</span>
                                    ))
                                ) : (
                                    <span>No customization available</span>
                                )}
                            </span>
                        </p>

                        <p className='text-lg font-semibold'>Processing Time: <span className='font-light ml-1'> {selectProduct?.processingTime}</span></p>

                    </div>
                    {/* buy or add to card */}

                    <div className='mt-8 space-x-4'>
                        <Link className='btn bg-teal-800 hover:bg-teal-600 text-white px-8 rounded-md text-lg font-bold'> CART</Link>
                        <Link className='btn bg-pink-600 hover:bg-pink-700 text-white px-8 rounded-md text-lg font-bold'> BUY NOW</Link>

                    </div>
                </div>



            </section>

            {/* divider */}
            <div className="divider md:w-9/12 mx-auto py-0 mt-20"></div>
            {/* details seciton */}
            <section className='md:w-9/12 mx-auto '>
                <div className="collapse collapse-arrow  ">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">DESCRIPTION</div>
                    <div className="collapse-content">
                        <p>{selectProduct?.description}</p>
                    </div>
                </div>
            </section>

            <div className="divider md:w-9/12 mx-auto py-0"></div>




        </>
    )
}

export default Details
