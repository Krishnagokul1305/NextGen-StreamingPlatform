import { useParams } from "react-router-dom";
import InputField from "../../Components/InputField";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { resetPassword_api } from "../../Services/apiAuth";
import { useMutation } from "@tanstack/react-query";

function ResetPasswordForm() {
  const { resetToken } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: resetPassword_api,
    onSuccess: (data) => {
      toast.success(data.message||"reset successful");
      window.open("/login", "_blank");
    },
    onError: (err) => {
      console.error(err);
      toast.error("Failed to reset");
    },
  });

  function onSubmit(data) {
    mutate({ token: resetToken, newPassword: data.newPassword });
    reset();
  }

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
      <div className="space-y-5">
        <InputField
          label="New Password"
          type="password"
          placeholder="Enter New Password"
          register={register("newPassword", {
            required: "New password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          error={errors.newPassword}
        />
        <InputField
          label="Confirm Password"
          type="password"
          placeholder="Confirm your Password"
          register={register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("newPassword") || "Passwords do not match",
          })}
          error={errors.confirmPassword}
        />
      </div>

      <button
        type="submit"
        className="w-[60%] mx-auto block bg-secondary hover:bg-secondary-hover text-white py-3 rounded-xl transition duration-300 my-10"
      >
        Submit
      </button>
    </form>
  );
}

export default ResetPasswordForm;
