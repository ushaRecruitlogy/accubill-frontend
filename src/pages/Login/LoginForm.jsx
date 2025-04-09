import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import loginImage from '../../assets/login2.png';
import { Link } from "react-router-dom";
import { useState } from "react";
import ForgetPassword from "../ForgetPassword/forgetPassword";


// Validation schema
const loginSchema = yup.object().shape({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

function LoginForm() {
  const [showForgetPassword, setShowForgetPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // Call login API here
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="overflow-hidden rounded-lg border bg-white shadow-md">
        <div className="grid p-0 md:grid-cols-2 min-h-[500px]"> {/* Ensure fixed min-height */}
          {/* Left Form Section */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            {showForgetPassword ? (
              <ForgetPassword onBack={() => setShowForgetPassword(false)} />
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <div className="text-center">
                  <h1 className="text-2xl font-bold">Welcome back</h1>
                  <p className="text-gray-500">Login to your Acme Inc account</p>
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
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="text-sm font-medium">Password</label>
                   
                  </div>
                  <input
                    {...register("password")}
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="rounded-md border px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none"
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 text-white py-2 font-medium hover:bg-blue-700 transition"
                >
                  Login
                </button>
                <div>

                
                <button
                      type="button"
                      onClick={() => setShowForgetPassword(true)}
                      className="text-sm text-blue-600 hover:underline underline-offset-2"
                    >
                      Forgot your password?
                    </button>
                    </div>

                {/* Divider */}
                <div className="relative text-center text-sm text-gray-500">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <span className="relative bg-white px-2">Or continue with</span>
                  
                </div>
                
                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link to="/register" className="underline underline-offset-4 text-blue-600 hover:text-blue-800">
                    Sign up
                  </Link>
                </div>
              </form>
            )}
          </div>

          {/* Right Side Image */}
          <div className="relative hidden bg-gray-100 md:block">
            <img
              src={loginImage}
              alt="Login"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500">
        By clicking continue, you agree to our{" "}
        <a href="#" className="underline hover:text-blue-600">Terms of Service</a> and{" "}
        <a href="#" className="underline hover:text-blue-600">Privacy Policy</a>.
      </div>
    </div>
  );
}

export default LoginForm;
