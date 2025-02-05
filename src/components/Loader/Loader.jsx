import React from 'react'
import Lottie from "lottie-react";
import loaderAnimation from './../../lottie_Animation/loader_animation.json'

const Loader = () => {
    return (
        <>

            <div className='flex justify-center items-center h-[100vh]'>
                <Lottie animationData={loaderAnimation} loop={true}></Lottie>
                {/* <span className="loading loading-bars loading-lg"></span> */}
            </div>

        </>
    )
}

export default Loader
