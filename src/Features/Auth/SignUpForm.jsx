import { Link, useNavigate } from "react-router-dom";
import InputField from "../../Components/InputField";

function SignUpForm() {
  const Navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-[rgba(153,153,153,0.56)] to-[rgba(51,51,51,0.37)] p-8 rounded-3xl min-w-[430px]">
      <div className="mb-6 flex justify-center">
        <div className="w-24 h-12  flex items-center justify-center rounded">
          <span>Logo</span>
        </div>
      </div>

      <form>
        <div className="space-y-5">
          <InputField label="Email" type="email" placeholder="Enter Email Address" />
          <InputField label="Password" type="password" placeholder="Enter Password" />
          <InputField label="Mobile No" type="phoneNo" placeholder="Enter Mobile Number" />
        </div>

        <div className="flex items-center text-[#C8C8C8] mt-4 text-xs">
          <input
            type="checkbox"
            id="rememberMe"
            className="mr-2 accent-input"
          />
          <label htmlFor="rememberMe">
            I agree to all the <span className="text-secondary">Terms</span> and{" "}
            <span className="text-secondary">Privacy Policies</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-[60%] mx-auto block bg-secondary hover:bg-secondary-hover text-white py-3 rounded-xl transition duration-300 my-7"
          onClick={() => Navigate("/")}
        >
          Create Account
        </button>
        <div className="text-center text-xs">
          Already have an account?{" "}
          <Link to="/login" className="text-secondary">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}


export default SignUpForm;
