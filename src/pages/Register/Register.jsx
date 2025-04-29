import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerImage from "../../assets/images/signup1.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const schema = yup.object().shape({
  userType: yup.string().required("User type is required"),
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Form data:", data);
    localStorage.setItem("userData", JSON.stringify(data));
    toast.success("Registration successful. please check your email to activate your  account. ", {
      onClose: () => navigate("/login"),
    });
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted bg-gray-200 p-6 md:p-10 mt-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-lg bg-white shadow-md">
            <div className="grid p-0 md:grid-cols-2">
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8 flex flex-col gap-6">
                <div className="text-center">
                  <h1 className="text-2xl font-bold">Create an account</h1>
                  <p className="text-gray-500">Sign up to start using Acc & Bill soft.</p>
                </div>

                {/* User Type Dropdown */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="userType" className="text-sm font-medium">User Type</label>
                  <select
                    {...register("userType")}
                    id="userType"
                    className="rounded-md border px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select User Type</option>
                    <option value="Admin">Admin</option>
                    <option value="Accountant">Accountant</option>
                    <option value="Manager">Manager</option>
                    <option value="Client">Client</option>
                  </select>
                  {errors.userType && <p className="text-red-500 text-sm">{errors.userType.message}</p>}
                </div>

                {/* Name Field */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-sm font-medium">User Name</label>
                  <input
                    {...register("name")}
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="rounded-md border px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    className="rounded-md border px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <div className="relative">
                    <input
                      {...register("password")}
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="rounded-md border px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none w-full"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-800"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-[var(--bs-red)] text-white py-2 font-medium hover:bg-blue-700 transition"
                >
                  Sign up
                </button>

                {/* Divider */}
                <div className="relative text-center text-sm text-gray-500">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <span className="relative bg-white px-2">Or continue with</span>
                </div>

                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="underline underline-offset-4 text-[var(--bs-red)] hover:text-blue-800">
                    Log in
                  </Link>
                </div>
              </form>

              {/* Right Side Image */}
  {/* Right Side Image */}
  <div className="relative hidden md:block h-full bg-red-600 overflow-hidden rounded-tr-[80px]">
  {/* Background Image */}
  <img
    src={registerImage}
    alt="Register Image"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Red overlay with fold */}
  <div className="absolute inset-0 bg-red-600/90 flex flex-col items-center justify-center text-center p-6">
    {/* Bottom-right folded effect */}
    <div className="absolute bottom-0 right-0 w-[100px] h-[100px] overflow-hidden">
      {/* White triangle */}
      <div className="absolute top-0 right-0 w-full h-full bg-white clip-path-white-triangle"></div>
      {/* Dark red triangle */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-red-700 clip-path-red-triangle"></div>
    </div>

    {/* Content */}
    <FaUserCircle className="text-white text-6xl mb-4" /> {/* Big User Icon */}
    <h2 className="text-white text-3xl font-bold mb-2">Welcome to Registration</h2>
    <p className="text-white text-lg">
      Create your account easily and start enjoying our services.<br />
      It's quick, secure, and absolutely free!
    </p>
  </div>
</div>



            </div>
          </div>

          <div className="text-center text-xs text-gray-500">
            By signing up, you agree to our{" "}
            <a href="#" className="underline hover:text-[var(--bs-red)]">Terms of Service</a> and{" "}
            <a href="#" className="underline hover:text-[var(--bs-red)]">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
