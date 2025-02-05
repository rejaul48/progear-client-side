import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SportsContext } from '../../contextApi/SportsContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const Login = () => {
    // State for storing email and password
    const [email, setEmail] = useState('');
    const [passwordShow, setPasswordShow] = useState(false);
    // find location and navigate using location
    const location = useLocation();
    const navigate = useNavigate();

    const { loginRegisterUser, logInWithGoogle } = useContext(SportsContext);

    // login with google
    const handleLoginWithGoogle = () => {
        logInWithGoogle()
            .then(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "login with google successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 1500);
            })
            .catch(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "Something Went Wrong",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    };

    // Login with email and password (dummy function)
    const handleRegisterUserLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginRegisterUser(email, password)
            .then(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "Something Went Wrong",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    };

    return (
        <>

            <Helmet >
                <title>ProGear || Login Your Account</title>
            </Helmet>

            <section>
                <div className='md:w-7/12 mx-auto flex flex-col justify-center items-center mb-16 p-4'>
                    <div>
                        <h2 className='text-xl md:text-4xl font-bold mb-12'>Login your account</h2>
                    </div>
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                        <form className="card-body py-2" onSubmit={handleRegisterUserLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={passwordShow ? "text" : "password"} // Toggle input type
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered"
                                    required
                                />
                                {/* Password visibility toggle icon */}
                                <span
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                    onClick={() => setPasswordShow(!passwordShow)} // Toggle password visibility
                                >
                                    {passwordShow ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />}
                                </span>

                                <label className="label">
                                    <Link
                                        to="/forgorpassword"
                                        state={{ email }}
                                        className="label-text-alt link link-hover"
                                    >
                                        Forgot password?
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button type="submit" className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                        </form>
                        {/* Register Link */}
                        <div className="flex justify-center mb-2">
                            <h3>
                                I don't have any account?{' '}
                                <Link to="/register" className="hover:underline">
                                    Register
                                </Link>
                            </h3>
                        </div>
                        {/* Login with Google */}
                        <div className="flex justify-center mb-4">
                            <Link onClick={() => handleLoginWithGoogle()} className="flex items-center gap-1 text-xl font-semibold hover:underline">
                                <FaGoogle className="text-2xl" /> Log in with Google
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
