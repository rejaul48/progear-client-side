import React from 'react'
import { CgMail } from 'react-icons/cg'
import { FaFacebook, FaGoogle, FaPhone, FaTwitter } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'

const Footer = () => {
    return (
        <>

            <section className='bg-black px-4 xl:px-0 '>

                <div className='max-w-screen-xl mx-auto text-white'>

                    <div className="footer_top 
                    items-center justify-between pt-12 pb-6 mt-2 mb-6
                     md:flex">
                        <div>
                            <h2 className='text-3xl md:text-4xl font-bold'>ProGear Sports</h2>
                            <div className="divider bg-orange-400 w-4/12 h-1 border-none"></div>
                        </div>

                    </div>

                    <div className="footer_center pb-8">
                        <div className='grid grid-cols-2 gap-3 lg:grid-cols-3'>
                            <nav className='flex flex-col'>
                                <h6 className="footer-title">Contact</h6>
                                <div className='mt-4'>
                                    <p className='flex items-center gap-2'><FaPhone ></FaPhone> ++12345678958</p>
                                    <p className='flex items-center gap-2'><CgMail ></CgMail> info@gmail.com</p>
                                    <p className='flex items-center gap-2'><FaLocationPin ></FaLocationPin> Sadar, Dinajpur, Bangladesh</p>
                                </div>
                            </nav>


                            <nav className=' ml-5 md:ml-0'>
                                <h6 className="footer-title">Legal</h6>
                                <div className='flex flex-col space-y-1 mt-4'>
                                    <a className="link link-hover">Terms of use</a>
                                    <a className="link link-hover">Privacy policy</a>
                                    <a className="link link-hover">Cookie policy</a>
                                </div>
                            </nav>

                            <nav className=' ml-5 md:ml-0 mt-4 md:mt-2 lg:mt-0'>
                                <div>
                                    <h2 className='text-xl font-light mb-4'>Find Us On</h2>
                                    <div className='flex gap-3 md:mt-0'>
                                        <button> <FaFacebook className='text-3xl'></FaFacebook></button>
                                        <button> <FaTwitter className='text-3xl'></FaTwitter></button>
                                        <button> <FaGoogle className='text-3xl'></FaGoogle></button>
                                    </div>
                                </div>
                            </nav>

                        </div>
                    </div>

                    <div className="copyright bg-gray-600 bg-opacity-55 py-4">
                        <h2 className='text-center text-white text-xs md:text-lg'>All &copy;copyright are reserved by <a href="https://facebook.com/mrreja.me" target='_blank' className='text-green-900'>Rejaul Islam Reja</a></h2>
                    </div>

                </div>

            </section>



        </>
    )
}

export default Footer
