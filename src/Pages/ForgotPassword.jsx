import { loginImg } from "../assets";
import ForgotPasswordForm from "../Features/Auth/ForgotPasswordForm";

function ForgotPassword() {
  return (
    <div
      className="h-screen bg-no-repeat bg-cover flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(1, 1, 1, 0.867) 0%, rgba(0, 0, 0, 0.63) 100%), url(${loginImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ForgotPasswordForm />
    </div>
  );
}

export default ForgotPassword;
