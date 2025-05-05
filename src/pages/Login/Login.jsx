import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import { FaSignInAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { PiUserListFill } from "react-icons/pi";
import LogImage from "../../assets/images/login12.png";
// import  LogImage from "../../assets/images/hover-bg.png";

// Validation schema
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

function Login() {
  const [showModal, setShowModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  // const [generatedOtp, setGeneratedOtp] = useState('');

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleAddEmail = () => {
    const otpGenerated = Math.floor(100000 + Math.random() * 900000);
    // const otpGenerated = 123456;
    console.log(`Generated OTP: ${otpGenerated}`); // For demo purpose
    // setGeneratedOtp(otpGenerated.toString());
    setShowModal(false);
    setShowOtpModal(true);
    setEmail("");
  };

  const handleAddEmailLink = () => {
    if (email === "admin@gmail.com") {
      toast.success(
        "Your account is already  activated. You can login to access resources."
      );
      setEmail("");
      setShowModal(false);
    } else if (email === "admin1@gmail.com") {
      toast.success(
        "Activation link send. Please check your email to activate your account."
      );
      setEmail("");
      setShowModal(false);
    } else {
      toast.error("Email not found or not eligible for activation.");
    }
  };

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    console.log("Stored User Data:", storedUserData);

    if (
      storedUserData &&
      storedUserData.email === data.email &&
      storedUserData.password === data.password
    ) {
      toast.success("OTP sent to your email. Please verify to login");
      handleAddEmail();
      console.log("Login successful!");
    } else if (
      data.email === "admin1@gmail.com" &&
      data.password === "admin123"
    ) {
      toast.info("Your account is not activated please activate first.");
      // setShowOtpModal(true);
      // setShowModal(false);
      // navigate("/profilepage", { replace: true });
    } else {
      toast.error("Invalid email or password.");
      console.log("Invalid email or password.");
    }
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted bg-gray-200 p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-4xl bg-white shadow-lg">
            <div className="grid p-0 md:grid-cols-2 min-h-[500px] h-full">
              {/* Left Form Section */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                {showForgetPassword ? (
                  <ForgetPassword onBack={() => setShowForgetPassword(false)} />
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-6"
                  >
                    <div className="flex flex-col mt-0 gap-2">
                      <div className="flex flex-row justify-between items-center">
                        <button
                          type="button"
                          onClick={() => navigate("/")}
                          className="flex items-center gap-2 curser text-[var(--color-blue)] mt-0 mb-15 hover:text-[var(--color-blue)] text-sm font-medium w-fit"
                        >
                          <span className="text-lg">←</span> Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowModal(true)}
                          className="flex items-center gap-2 text-[var(--color-blue)] mt-0 mb-15 hover:text-[var(--color-blue)] text-sm font-medium w-fit"
                        >
                          Activate Account
                          <span className="text-lg">→</span>
                        </button>
                      </div>

                      <div className="text-center">
                        <h1 className="text-3xl bg-gradient-to-t from-red-500 to-pink-500 bg-clip-text text-transparent">
                          Welcome back
                        </h1>

                        <p className="fontTopHeading ">
                          Login to your Accu Bill account
                        </p>
                      </div>
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
                        className="rounded-md border px-3 py-2 fontHeading text-gray-500! shadow-sm focus:border-blue-500 focus:outline-none"
                      />
                      {errors.email && (
                        <p className="text-[var(--color-red)]! fontHeading text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Password Field */}
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="password"
                          className="fontHeading"
                        >
                          Password
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          {...register("password")}
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="rounded-md border px-3 py-2 fontHeading text-gray-500! shadow-sm focus:border-blue-400 focus:outline-none w-full"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-red-400! fontHeading text-sm">
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                    {/* 
                    <button
                      type="submit"
                      className="w-full rounded-md bg-[var(--color-red)] text-white py-2 font-medium hover:bg-blue-700 transition"
                    > */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-t from-red-600 to-pink-600 text-white py-2 font-medium hover:bg-blue-700 transition rounded-full"
                    >
                      Login
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowForgetPassword(true)}
                      className="text-sm hover:underline underline-offset-2"
                    >
                      <h2 className="text-1xl bg-gradient-to-t from-red-500 to-pink-500 bg-clip-text text-transparent">
                        Forgot your password?
                      </h2>
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

                    <div className="text-center fontTopHeading">
                      Don't have an account?{" "}
                      <Link
                        to="/register"
                        className="underline underline-offset-4 text-[var(--color-red)] hover:text-[var(--color-blue)]"
                      >
                        Sign up
                      </Link>
                    </div>
                  </form>
                )}
              </div>

              {/* Right Side Image Section */}
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

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  {showForgetPassword ? (
                    <>
                      <FaSignInAlt className="text-white text-6xl mb-4" />
                      <h2 className="text-white text-3xl font-bold mb-2">
                        Reset Your Password
                      </h2>
                      <p className="text-white text-lg">
                        Enter your email to receive a password reset link.
                        <br />
                        Make sure to check your inbox!
                      </p>
                    </>
                  ) : (
                    <>
                      <PiUserListFill className="text-white text-6xl mb-4" />
                      <h2 className="text-white text-3xl font-bold mb-2">
                        Welcome to Login
                      </h2>
                      <p className="text-white text-lg">
                        Login to your account to access all features.
                        <br />
                        Your data is safe with us.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500">
            By clicking continue, you agree to our{" "}
            <a href="#" className="underline hover:text-blue-600">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-blue-600">
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>

      {/* Email Modal (if needed later) */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-opacity-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h4 className="text-lg font-semibold mb-4">Email Address</h4>
            <p className="text-sm text-gray-600 mb-4">
              Account activation email
            </p>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEmail}
                className="px-4 py-2 bg-[var(--color-red)] text-white rounded hover:opacity-90"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-opacity-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h4 className="text-lg font-semibold mb-4">Enter OTP</h4>
            <p className="text-sm text-gray-600 mb-4">
              Please enter the 6-digit OTP sent to your email.
            </p>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowOtpModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (otp === "123456") {
                    toast.success("OTP verified login Successfully!");
                    setShowOtpModal(false);
                    navigate("/profilepage", { replace: true });
                  } else {
                    toast.error("Invalid OTP. Please try again.");
                  }
                }}
                className="px-4 py-2 bg-[var(--color-red)] text-white rounded hover:opacity-90"
              >
                Verify OTP
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-opacity-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h4 className="text-lg font-semibold mb-4">Email Address</h4>
            <p className="text-sm text-gray-600 mb-4">
              Account activation email
            </p>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEmailLink}
                className="px-4 py-2 bg-[var(--color-red)] text-white rounded hover:opacity-90"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
