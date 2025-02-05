import React, { useContext } from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SportsContext } from '../../contextApi/SportsContext'
import { Tooltip } from 'react-tooltip';

const Product = ({ product }) => {

    // get theme dark or light
    const { theme } = useContext(SportsContext)

    return (
        <>

            <section className={`shadow-lg p-5 ${theme === 'dark' && 'border-2 border-white rounded-lg'}`}>
                {/* product img */}
                <div className='h-[230px]'>
                    <img id="my-anchor-element" className='w-full h-full  object-cover' src={product?.photoURL} alt="product img" />
                    <Tooltip
                        anchorSelect="#my-anchor-element"
                        content={product?.itemName}
                        delayShow={200}
                        delayHide={100}
                    />
                </div>
                <div>
                    <h2 className='mt-2 text-xl font-bold my-2'>{product?.itemName}</h2>
                    <div className='flex justify-between items-center '>
                        <h3 className='font-semibold'>{product?.categoryName}</h3>
                        <p>Price: ${product?.price}</p>
                    </div>
                    <div>
                        <h2 className='flex items-center gap-1 font-semibold mt-1'>Ratting:

                            <FaStar ></FaStar>
                            <FaStar ></FaStar>
                            <FaStar ></FaStar>
                            <FaStar ></FaStar>
                            <FaStar ></FaStar>
                            <p>({product?.rating})</p>
                        </h2>
                    </div>

                    <div>
                        <Link to={`/details/${product?._id}`} className='btn bg-orange-300 w-full mt-3 hover:bg-orange-400'>View Details</Link>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Product
