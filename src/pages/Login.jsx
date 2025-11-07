import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

const Login = () => {
    const { signInUser, googleLogin, githubLogin } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';

    const onSubmit = (data) => {
        const { email, password } = data;
        signInUser(email, password)
            .then(result => console.log(result.user))
            .catch(error => console.log(error));
    };

    const handleSocialLogin = (socialProvider) => {
        socialProvider().then(result => {
            if (result.user) navigate(from);
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-white to-green-100 animate-fadeIn">
            <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-xl border border-gray-200 transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 animate-fadeIn delay-100">
                    Login to your account
                </h1>

                {/* Social Login Buttons */}
                <div className="space-y-3 mb-5">
                    <button
                        onClick={() => handleSocialLogin(googleLogin)}
                        className="w-full flex items-center justify-center gap-3 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-red-400 to-green-500 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        Login with Google
                    </button>

                    <button
                        onClick={() => handleSocialLogin(githubLogin)}
                        className="w-full flex items-center justify-center gap-3 py-3 rounded-xl font-semibold bg-gray-900 text-white shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                        </svg>
                        Login with GitHub
                    </button>
                </div>

                <div className="flex items-center justify-between mb-5 text-gray-400">
                    <hr className="w-full" />
                    <span className="px-2">OR</span>
                    <hr className="w-full" />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 relative animate-fadeIn delay-200">
                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered rounded-xl border-gray-300 focus:ring-2 focus:ring-green-300 focus:scale-105 transform transition-all duration-200"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                    </div>

                    {/* Password */}
                    <div className="flex flex-col relative">
                      <label className="mb-2 font-medium text-gray-700">Password</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="input input-bordered rounded-xl border-gray-300 focus:ring-2 focus:ring-green-300 focus:scale-105 transform transition-all duration-200 pr-12" 
                        {...register("password", { required: true })}
                      />
                      
                      {/* Centered Icon */}
                      <span
                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 hover:text-gray-700"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>

                      {errors.password && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                      <Link className="text-sm text-green-600 hover:underline mt-1" to="#">
                        Forgot password?
                      </Link>
                    </div>


                    <button className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Login
                    </button>

                    <p className="text-center text-gray-600">
                        New here?{" "}
                        <Link className="text-green-600 font-bold hover:underline" to="/register">
                            Register
                        </Link>
                    </p>
                </form>
            </div>

            {/* Tailwind animation */}
            <style>{`
                .animate-fadeIn {
                    animation: fadeIn 0.7s ease forwards;
                }
                .animate-fadeIn.delay-100 {
                    animation-delay: 0.1s;
                }
                .animate-fadeIn.delay-200 {
                    animation-delay: 0.2s;
                }
                @keyframes fadeIn {
                    0% {opacity:0; transform: translateY(20px);}
                    100% {opacity:1; transform: translateY(0);}
                }
            `}</style>
        </div>
    );
};

export default Login;
