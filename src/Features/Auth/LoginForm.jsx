import { Link, useNavigate } from "react-router-dom";
import InputField from "../../Components/InputField";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../Services/apiAuth";
import toast from "react-hot-toast";

function LoginForm() {
  const Navigate = useNavigate();

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      username: "Cordia_Feest",
      password: "1234",
    },
  });

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("token", JSON.stringify(data.data));
      toast.success(data.message);
    },
    onError: (err) => {
      console.log(err);
      toast.error("Failed to login");
    },
  });

  function onSubmit(userData) {
    mutate(userData);
    reset();
  }

  return (
    <form
      className="bg-gradient-to-b from-[rgba(153,153,153,0.56)] to-[rgba(51,51,51,0.37)] p-8 rounded-3xl min-w-[430px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6 flex justify-center">
        <div className="w-24 h-12  flex items-center justify-center rounded">
          <span>Logo</span>
        </div>
      </div>

      <div>
        <div className="space-y-5">
          <InputField
            label="UserName"
            type="text"
            placeholder="Enter your UserName"
            register={register}
            name={"username"}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter Password"
            register={register}
            name={"password"}
          />
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
          <Link
            className="text-secondary"
            onClick={() => Navigate("/forgot-password")}
          >
            Forgot Password ?
          </Link>
        </div>
        <button
          type="submit"
          className="w-[60%] mx-auto block bg-secondary hover:bg-secondary-hover text-white py-3 rounded-xl transition duration-300 my-7"
        >
          Sign In
        </button>
        <div className="text-center text-xs">
          Don't have an account?{" "}
          <Link to="/signup" className="text-secondary">
            SignUp
          </Link>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
