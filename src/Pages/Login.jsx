import { loginImg } from "../assets";
import LoginForm from "../Features/Auth/LoginForm";

function Login() {
  return (
    <div
      className="h-screen bg-no-repeat bg-cover flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(1, 1, 1, 0.867) 0%, rgba(0, 0, 0, 0.63) 100%), url(${loginImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <LoginForm />
    </div>
  );
}

export default Login;
