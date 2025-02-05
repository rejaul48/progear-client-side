import React from 'react'
import Banner from '../../components/Bannar/Banner'
import Products from '../../components/Products/Products'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import { FaArrowRight } from 'react-icons/fa'
import Blogs from '../../components/Blogs/Blogs'
import { Helmet } from 'react-helmet'


const Home = () => {

    return (
        <>

            <Helmet >
                <title>ProGear || Home</title>
            </Helmet>

            <div>
                <Banner ></Banner>
            </div>

            {/* this is product section */}
            <div className='w-10/12 mx-auto mt-24'>

                <div className='section_head mb-6'>
                    <h2 className='text-center text-5xl font-bold'><span className='border-b-4 border-b-orange-200 '>Prod</span>ucts</h2>
                </div>

                <Products ></Products>
            </div>

            {/* product category section */}
            <section className='mt-12 text-center w-10/12 mx-auto'>
                <div className='section_head my-12'>
                    <h2 className='text-center text-5xl font-bold'><span className='border-b-4 border-b-orange-200 '>Cate</span>gory</h2>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                    <Link className='btn w-full bg-orange-200 hover:bg-orange-300'>Football </Link>
                    <Link className='btn w-full bg-orange-200 hover:bg-orange-300'>Basketball </Link>
                    <Link className='btn w-full bg-orange-200 hover:bg-orange-300'>Tennis </Link>
                    <Link className='btn w-full bg-orange-200 hover:bg-orange-300'>Cricket </Link>
                    <Link className='btn w-full bg-orange-200 hover:bg-orange-300'>Swimming </Link>
                    <Link className='btn w-full bg-orange-200 hover:bg-orange-300'>Baseball </Link>
                    <Link className='btn w-full bg-orange-200 hover:bg-orange-300'>Hockey </Link>
                    <Link className='btn w-full bg-orange-200 hover:bg-orange-300'>Golf </Link>
                </div>
            </section>

            {/* another section */}

            <section className='mt-24  relative'>
                <div className='w-full h-[250px] md:h-[450px] lg:h-[600px]'>
                    <img className='w-full h-full object-cover  blur-sm' src="https://i.imgur.com/KkkUNom.jpeg" alt="athlate_img" />

                    <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-20'>
                        <p className='text-xs uppercase'>elevate your style</p>
                        <h2 className='text-xl md:text-5xl lg:text-5xl font-semibold uppercase'>The rise of athleisure:</h2>

                        <h2 className='text-sm md:text-2xl lg:text-5xl font-semibold uppercase'><TypeAnimation
                            sequence={[
                                'Top sports equipment for all',
                                1000,
                                'Football, Basketball, and more gear!',
                                1000,
                                'Shop Running Shoes, Jerseys, Accessories',
                                1000,
                                'Fitness, protective gear, we have it',
                                1000,
                                'Elevate performance with the right gear',
                                1000,
                                'Free shipping on orders $50+',
                                1000,
                            ]}
                            speed={50}
                            repeat={Infinity}

                        />

                        </h2>
                    </div>
                </div>

            </section>

            {/* another section */}

            <section className='max-w-7xl mx-auto mt-16'>
                <div className='flex items-center justify-between px-4 xl:px-4'>
                    <div>
                        <p>BLOG</p>
                        <h3 className='text-lg md:text-4xl font-bold'>LATEST BLOG</h3>
                    </div>
                    <div>
                        <Link className='flex items-center gap-2  md:text-2xl'>Read More <FaArrowRight ></FaArrowRight> </Link>
                    </div>
                </div>


                {/* blogs card show here */}

                <div className='mt-5 mb-12'>
                    <Blogs ></Blogs>
                </div>

            </section>
        </>
    )
}

export default Home
