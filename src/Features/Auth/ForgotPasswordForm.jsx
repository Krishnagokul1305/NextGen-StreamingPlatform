import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query"; 
import InputField from "../../Components/InputField";
import {  forgotPassword_api } from "../../Services/apiAuth"; 
import toast from "react-hot-toast"; 

function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation({
    mutationFn: forgotPassword_api,
    onSuccess: (resetToken) => {
      window.open(`/reset-password/${resetToken}`, "_blank");
      reset();
      toast.success("Check your email for the reset link!");
    },
    onError: (error) => {
      console.error("Error resetting password:", error);
      toast.error("Failed to send reset link. Please try again.");
    },
  });

  const onSubmit = (data) => {
    mutate({ email: data.email });
  };

  return (
    <form
      className="bg-gradient-to-b from-[rgba(153,153,153,0.56)] to-[rgba(51,51,51,0.37)] p-8 rounded-3xl min-w-[430px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6 flex justify-center">
        <div className="w-24 h-12 flex items-center justify-center rounded">
          <span>Logo</span>
        </div>
      </div>

      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email address"
        register={register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email address",
          },
        })}
        error={errors.email}
      />

      <button
        type="submit"
        className="w-[60%] mx-auto block bg-secondary hover:bg-secondary-hover text-white py-3 rounded-xl transition duration-300 my-7"
      >
        Submit
      </button>
    </form>
  );
}

export default ForgotPasswordForm;
