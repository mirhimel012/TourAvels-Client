import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const from = '/';

  const onSubmit = (data) => {
    const { email, password, image, fullName } = data;
    setRegisterError('');
    setSuccess('');

    if (password.length < 6) {
      setRegisterError('Password should be at least 6 characters');
      setTimeout(() => setRegisterError(''), 4000);
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError('Password should have at least one uppercase character');
      setTimeout(() => setRegisterError(''), 4000);
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError('Password should have at least one lowercase character');
      setTimeout(() => setRegisterError(''), 4000);
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(fullName, image)
          .then(() => navigate(from));
      })
      .catch((error) => {
        setRegisterError("Registration failed. Please try again.");
        setTimeout(() => setRegisterError(''), 4000);
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-white to-purple-100 animate-fadeIn">
      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-xl border border-gray-200 transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-700 animate-fadeIn delay-100">
          Create your account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 relative animate-fadeIn delay-200">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-300 focus:scale-105 transform transition-all duration-200"
              {...register("fullName", { required: true })}
            />
            {errors.fullName && <span className="text-red-500 text-sm mt-1">This field is required</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-300 focus:scale-105 transform transition-all duration-200"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500 text-sm mt-1">This field is required</span>}
          </div>

          {/* Image URL */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              placeholder="Profile Image URL"
              className="input input-bordered rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-300 focus:scale-105 transform transition-all duration-200"
              {...register("image")}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col relative">
            <label className="mb-2 font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input input-bordered rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-300 focus:scale-105 transform transition-all duration-200 pr-12"
              {...register("password", { required: true })}
            />

            {/* Centered Icon */}
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 hover:text-gray-700 transition-colors duration-200"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

            {errors.password && <span className="text-red-500 text-sm mt-1">This field is required</span>}

            <Link className="text-sm text-purple-600 hover:underline mt-1" to="#">
              Forgot password?
            </Link>
          </div>




          {/* Register Button */}
          <button className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Register
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link className="text-purple-600 font-bold hover:underline" to="/login">
              Login
            </Link>
          </p>
        </form>

        {/* Toast Messages */}
        {registerError && (
          <div className="toast toast-center toast-middle bg-red-500 rounded-3xl mt-3">
            <div className="alert alert-info">
              <span>{registerError}</span>
            </div>
          </div>
        )}
        {success && (
          <div className="toast toast-center toast-middle bg-blue-500 rounded-3xl mt-3">
            <div className="alert alert-info">
              <span>{success}</span>
            </div>
          </div>
        )}

        {/* Tailwind fade-in animation */}
        <style>{`
          .animate-fadeIn {
            animation: fadeIn 0.7s ease forwards;
          }
          .animate-fadeIn.delay-100 { animation-delay: 0.1s; }
          .animate-fadeIn.delay-200 { animation-delay: 0.2s; }
          @keyframes fadeIn {
            0% {opacity:0; transform: translateY(20px);}
            100% {opacity:1; transform: translateY(0);}
          }
        `}</style>
      </div>
    </div>
  );
};

export default Register;
