
import RegisterForm from '../Register/RegisterForm';
import LoginForm from './LoginForm';

function Login() {

    console.log("Login page loaded")

    return (
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10 mt-10">
            <div className="w-full max-w-sm md:max-w-3xl">
            
                <LoginForm /> 
                {/* <RegisterForm/> */}
            </div>
        </div>
    );
}

export default Login