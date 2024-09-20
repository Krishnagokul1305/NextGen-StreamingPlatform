import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
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
          <div className="flex flex-col">
            <label className="text-white mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="p-4 rounded-lg bg-input border border-gray-700 text-white focus:outline-none font-light"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="p-4 rounded-lg bg-input border border-gray-700 text-white focus:outline-none font-light"
            />
          </div>
        </div>
        <div className="flex justify-between items-center text-[#C8C8C8] mt-4 text-xs">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2 accent-input"
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <a href="#" className="text-secondary">
            Forgot Password
          </a>
        </div>
        <button
          type="submit"
          className="w-[60%] mx-auto block bg-secondary hover:bg-secondary-hover text-white py-3 rounded-xl transition duration-300 my-7"
          onClick={() => Navigate("/")}
        >
          Sign In
        </button>
        <div className="text-center text-xs">
          Don't have an account?{" "}
          <Link to="/signup" className="text-secondary">
            SignUp
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
