import { SignUpImg } from "../assets";
import SignUpForm from "../Features/Auth/SignUpForm";

function SignUp() {
  return (
    <div
      className="h-screen bg-no-repeat bg-cover flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(1, 1, 1, 0.867) 0%, rgba(0, 0, 0, 0.63) 100%), url(${SignUpImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <SignUpForm/>
    </div>
  );
}

export default SignUp;
