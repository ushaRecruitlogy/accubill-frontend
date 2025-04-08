import React from "react";
import RegisterForm from "./RegisterForm";


const SignUp = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10 mt-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <RegisterForm />
      </div>
    </div>
  );
};

export default SignUp;
