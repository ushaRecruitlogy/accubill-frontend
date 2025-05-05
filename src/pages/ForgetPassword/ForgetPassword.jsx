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
        <h2 className="text-3xl bg-gradient-to-t from-red-500 to-pink-500 bg-clip-text text-transparent">Reset Password</h2>
        <p className="fontTopHeading">Enter your email to receive a reset link</p>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="fontHeading text-sm">Email</label>
        <input
          id="email"
          type="email"
          placeholder="m@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-md border px-3 py-2 fontHeading text-sm shadow-sm focus:border[var(--color-red)] focus:outline-none"
          required
        />
      </div>

      <button
        type="submit"
       className="w-full bg-gradient-to-t from-red-600 to-pink-600 text-white py-2 font-medium hover:bg-blue-700 transition rounded-full"
     >
        Send Reset Link
      </button>

      <button
        type="button"
        onClick={onBack}
        className="text-[var(--color-red)] underline text-sm text-center"
      >
        ← Back to Login
      </button>
    </form>
  );
}

export default ForgetPassword;
