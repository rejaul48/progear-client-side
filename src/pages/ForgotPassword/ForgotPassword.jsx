
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { SportsContext } from '../../contextApi/SportsContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const ForgotPassword = () => {

    const location = useLocation();
    const email = location.state?.email;  // Retrieve email from state

    const { resetPasswordUsingEmail } = useContext(SportsContext);

    const handlePasswordReset = (e) => {
        e.preventDefault();
        resetPasswordUsingEmail(email)
            .then(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Check your email address",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => {
                    window.open('https://mail.google.com', '__blank');
                }, 1500)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // Handle error
            });
    };

    return (
        <>

            <Helmet >
                <title>ProGear || Forgot Password</title>
            </Helmet>

            <section className='md:w-8/12 lg:w-6/12 mx-auto bg-white mt-5 mb-8'>
                <div>
                    <h2 className='text-2xl font-bold text-center'>Forgot your password?</h2>
                </div>

                <form className='mt-8' onSubmit={handlePasswordReset}>
                    <div className='mt-2'>
                        <label className="w-full">
                            <span className="text-xl font-semibold pb-2">Email</span>
                            <input
                                name='email'
                                type="email"
                                placeholder="Enter your email"
                                className="input bg-[#f3f3f3] w-full"
                                value={email || ''}
                                readOnly
                            />
                        </label>
                    </div>

                    <div className='pb-2 mt-5'>
                        <button
                            className='btn text-white bg-black hover:bg-black z-20 hover:bg-opacity-70 w-full'>
                            Reset Password
                        </button>
                    </div>

                </form>
            </section>
        </>
    );
};

export default ForgotPassword;
