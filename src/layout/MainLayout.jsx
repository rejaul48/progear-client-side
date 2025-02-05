
import React, { useState, useEffect, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { SportsContext } from '../contextApi/SportsContext';
import loaderAnimation from './../lottie_Animation/loader_animation.json'
import Lottie from 'lottie-react';

const MainLayout = () => {
    const [isLoading, setIsLoading] = useState(true);

    const { theme } = useContext(SportsContext)

    useEffect(() => {
        // Show loader when the component  
        setIsLoading(true);

        // Set a timeout to hide the loader after 1 second
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        // Cleanup the timeout when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative">
            {/* Loader */}
            {isLoading && (
                <div className="flex justify-center items-center h-[100vh] absolute inset-0 bg-white z-50">
                    <Lottie animationData={loaderAnimation} loop={true}   className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%] h-auto"></Lottie>
                </div>
            )}

            {/* Content Section */}
            {!isLoading && (
                <>
                    {/* Navbar */}
                    <div className={`sticky top-0 z-50 ${theme === 'dark' ? "bg-white" : "bg-white"}`}>
                        <div className="max-w-7xl mx-auto ">
                            <Navbar />
                        </div>
                    </div>

                    {/* Content Outlet */}
                    <div>
                        <Outlet />
                    </div>

                    {/* Footer */}
                    <div>
                        <Footer />
                    </div>
                </>
            )}
        </section>
    );
};

export default MainLayout;
