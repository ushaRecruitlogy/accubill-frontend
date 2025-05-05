import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import registerImage from "../../assets/images/signup1.jpg";
import registerImage from "../../assets/images/hover-bg.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const schema = yup.object().shape({
  userType: yup.string().required("User type is required"),
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
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
    toast.success(
      "Registration successful. please check your email to activate your  account. ",
      {
        onClose: () => navigate("/login"),
      }
    );
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted bg-gray-200 p-6 md:p-10 mt-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="grid p-0 md:grid-cols-2">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-6 md:p-8 flex flex-col gap-6"
              >
                <div className="text-center">
                  <h1 className="text-3xl bg-gradient-to-t from-red-500 to-pink-500 bg-clip-text text-transparent">
                    Create an account
                  </h1>
                  <p className="fontTopHeading">
                    Sign up to start using Acc & Bill soft.
                  </p>
                </div>

                {/* User Type Dropdown */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="userType" className="fontHeading text-sm">
                    User Type
                  </label>
                  <select
                    {...register("userType")}
                    id="userType"
                    className="rounded-md border px-3 py-2 fontTopHeading text-sm shadow-sm focus:border-[var(--color-blue)] focus:outline-none"
                  >
                    <option value="">Select User Type</option>
                    <option value="Admin" className="fontHeading text-sm">
                      Admin
                    </option>
                    <option value="Accountant" className="fontHeading text-sm">
                      Accountant
                    </option>
                    <option value="Manager" className="fontHeading text-sm">
                      Manager
                    </option>
                    <option value="Client" className="fontHeading text-sm">
                      Client
                    </option>
                  </select>
                  {errors.userType && (
                    <p className="text-[var(--color-red)] text-sm">
                      {errors.userType.message}
                    </p>
                  )}
                </div>

                {/* Name Field */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="fontHeading text-sm">
                    User Name
                  </label>
                  <input
                    {...register("name")}
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="rounded-md border px-3 py-2 fontHeading text-sm shadow-sm focus:border-[var(--color-blue)] focus:outline-none"
                  />
                  {errors.name && (
                    <p className="text-[var(--color-red)] text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="fontHeading text-sm">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    className="rounded-md border px-3 py-2 fontHeading text-sm shadow-sm focus:border-[var(--color-blue)] focus:outline-none"
                  />
                  {errors.email && (
                    <p className="text-[var(--color-red)] text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="password" className="fontHeading text-sm">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      {...register("password")}
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="rounded-md border px-3 fontHeading  py-2 text-sm shadow-sm focus:border-[var(--color-blue)] focus:outline-none w-full"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-800"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-[var(--color-red)] text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-t from-red-600 to-pink-600 text-white py-2 font-medium hover:bg-blue-700 transition rounded-full"
                >
                  Sign up
                </button>

                {/* Divider */}
                <div className="relative text-center text-sm text-gray-500">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <span className="relative bg-white px-2">
                    Or continue with
                  </span>
                </div>

                <div className="fontTopHeading text-center! ">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="underline underline-offset-4 text-[var(--color-red)] hover:text-blue-800"
                  >
                    Log in
                  </Link>
                </div>
              </form>

              {/* Right Side Image */}

              <div className="relative hidden md:block bg-gradient-to-t from-red-600 to-pink-600 h-full overflow-hidden rounded-tl-[150px]">
                {/* Decorative droplets */}
                <div className="absolute top-8 left-6 w-24 h-24 bg-white/20 rounded-full blur-md animate-pulse" />
                <div className="absolute top-36 left-20 w-16 h-16 bg-white/30 rounded-full blur-sm" />
                <div className="absolute top-64 left-10 w-20 h-20 bg-white/10 rounded-full blur-lg" />
                <div className="absolute bottom-8 left-12 w-28 h-28 bg-white/20 rounded-full blur-md" />
                <div className="absolute bottom-36 left-6 w-16 h-16 bg-white/30 rounded-full blur-sm" />
                <div className="absolute bottom-20 left-32 w-12 h-12 bg-white/15 rounded-full blur-sm" />
                <div className="absolute top-1/2 left-1/4 w-14 h-14 bg-white/25 rounded-full blur-md" />
                <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-white/20 rounded-full blur-sm" />

                {/* Bottom wave */}
                <svg
                  viewBox="0 0 500 100"
                  preserveAspectRatio="none"
                  className="absolute bottom-0 left-0 w-full h-[100px]"
                >
                  <path
                    d="M0,60 C60,90 120,30 180,60 C240,90 300,30 360,60 C420,90 480,30 500,60 L500,100 L0,100 Z"
                    fill="white"
                  />
                </svg>

                {/* Login content only */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <FaUserCircle className="text-white text-6xl mb-4" />
                  <h2 className="text-white text-2xl font-bold mb-2">
                    Welcome to Registration
                  </h2>
                  <p className="text-white text-sm">
                    Create your account easily and start enjoying our services.
                    <br />
                    It's quick, secure, and absolutely free!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500">
            By signing up, you agree to our{" "}
            <a href="#" className="underline hover:text-[var(--color-red)]">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-[var(--color-red)]">
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
