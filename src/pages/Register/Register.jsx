import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";  // Importing both eye icons
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SportsContext } from "../../contextApi/SportsContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Register = () => {
  const [passwordShow, setPasswordShow] = useState(false);

  const { logInWithGoogle, createNewUser } = useContext(SportsContext);

  // find location and navigate using location or root directory
  const location = useLocation();
  const navigate = useNavigate();

  // login with google
  const handleLoginWithGoogle = () => {
    logInWithGoogle()
      .then((data) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Log in with Google Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1500);
        console.log("Logged in user:", data.user);
      })
      .catch((err) => console.error("Login failed:", err));
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const [passwordValidation, setPasswordValidation] = useState({
    hasUppercase: false,
    hasLowercase: false,
    isValidLength: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      validatePassword(value);
    }
  };

  const validatePassword = (password) => {
    setPasswordValidation({
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      isValidLength: password.length >= 6,
    });
  };

  const getValidationStyle = (isValid) =>
    isValid
      ? "text-green-600 flex items-center"
      : "text-red-600 flex items-center";

  // user register
  const handleUserRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    const user = { name, email, photoURL, password };
    console.log(user);
    // create new user
    createNewUser(email, password)
      .then((data) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Registration Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
        console.log(data);

        // send data into database
        fetch("https://assignment-10-server-mu-three.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Helmet >
        <title>ProGear || Register</title>
      </Helmet>
      {/* ..... */}
      <div className="flex justify-center items-center mt-5 px-3 lg:px-0">
        <div className="bg-white p-2 rounded-lg shadow-md w-full max-w-lg mb-12 border-gray-400 border-2">
          <h2 className="text-4xl font-bold text-center mb-6">Register</h2>
          <form className="space-y-4" onSubmit={handleUserRegister}>
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Photo URL Field */}
            <div>
              <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                Photo URL
              </label>
              <input
                type="url"
                name="photoURL"
                value={formData.photoURL}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type={passwordShow ? "text" : "password"} // Toggle between text and password
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <span
                className="absolute right-3 top-12 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setPasswordShow(!passwordShow)} // Toggle password visibility
              >
                {passwordShow ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />}
              </span>
              <div className="mt-2 text-xs">
                <p className={getValidationStyle(passwordValidation.hasUppercase)}>
                  {passwordValidation.hasUppercase ? "✔️" : "❌"} Must include at least one uppercase letter
                </p>
                <p className={getValidationStyle(passwordValidation.hasLowercase)}>
                  {passwordValidation.hasLowercase ? "✔️" : "❌"} Must include at least one lowercase letter
                </p>
                <p className={getValidationStyle(passwordValidation.isValidLength)}>
                  {passwordValidation.isValidLength ? "✔️" : "❌"} Must be at least 6 characters long
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Register
            </button>
          </form>

          {/*   Have an account */}
          <div className="flex justify-center mb-2 mt-3">
            <h3>
              I have an account?{" "}
              <Link to={"/login"} className="hover:underline">
                Login
              </Link>
            </h3>
          </div>
          {/* Login with Google */}
          <div className="flex justify-center mb-4">
            <Link
              onClick={() => {
                handleLoginWithGoogle();
              }}
              className="flex items-center gap-1 text-xl font-semibold hover:underline"
            >
              <FaGoogle className="text-2xl"></FaGoogle> Log in with Google
            </Link>
          </div>
        </div>
      </div>
    </>

  );
};

export default Register;
