import { Link } from 'react-router-dom';
import registerImage from '../../assets/signup.png';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


// Define validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // You can call your API here
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="overflow-hidden rounded-lg border bg-white shadow-md">
        <div className="grid p-0 md:grid-cols-2">
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8 flex flex-col gap-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Create an account</h1>
              <p className="text-gray-500">Sign up to start using Acme Inc</p>
            </div>

            {/* Name Field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
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
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
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
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
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
              <Link to="/login" className="underline underline-offset-4 text-blue-600 hover:text-blue-800">
                Log in
              </Link>
            </div>
          </form>

          {/* Right Side Image */}
          <div className="relative hidden bg-gray-100 md:block">
            <img
              src={registerImage}
              alt="Register Image"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500">
        By signing up, you agree to our{" "}
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
  );
}

export default RegisterForm;
