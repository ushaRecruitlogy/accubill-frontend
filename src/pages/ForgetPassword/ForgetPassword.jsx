import React, { useState } from "react";

function ForgetPassword({ onBack }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Reset Password</h2>
        <p className="text-gray-500">Enter your email to receive a reset link</p>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          placeholder="m@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-md border px-3 py-2 text-sm shadow-sm focus:border-red-500 focus:outline-none"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-red-600 text-white py-2 font-medium hover:bg-red-700 transition"
      >
        Send Reset Link
      </button>

      <button
        type="button"
        onClick={onBack}
        className="text-red-600 underline text-sm text-center"
      >
        ← Back to Login
      </button>
    </form>
  );
}

export default ForgetPassword;
