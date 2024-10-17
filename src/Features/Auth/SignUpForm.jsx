import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SignupEmail from "./SignupEmail";
import SignUpUser from "./SignUpUser";
import { useMutation } from "@tanstack/react-query";
import { checkEmail_api, checkUserName_api, signUp_api } from "../../Services/apiAuth";

function SignUpForm() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    username: "",
    name: "",
  });
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: userData,
  });

  const { mutate: checkEmailMutate } = useMutation({
    mutationFn: (email) => checkEmail_api( email ),
    onSuccess: (data) => {
      console.log(data);
      if (!data.success) {
        toast.error("Email already exists");
      } else {
        toast.success("Email verification successful");
        setUserData((prev) => ({ ...prev, email: data.email }));
        setStep(2);
      }
    },
    onError: (error) => {
      console.error("Error checking email:", error);
      toast.error("Failed to check email. Please try again.");
    },
  });

  const { mutate: signupMutate } = useMutation({
    mutationFn: (completeData) => signUp_api(completeData),
    onSuccess: (data) => {
      toast.success("Signup successful!");
      console.log(data);
      navigate("/movies");
    },
    onError: (error) => {
      console.error("Error completing signup:", error);
      toast.error("Failed to complete signup. Please try again.");
    },
  });

  const { mutate: checkUsernameMutate } = useMutation({
    mutationFn: (username) => checkUserName_api(username ),
    onSuccess: (data) => {
      console.log(data)
      if (!data.success) {
        toast.error("Username already exists");
      } else {
        signupMutate(userData);
      }
    },
    onError: (error) => {
      console.error("Error checking username:", error);
      toast.error("Failed to check username. Please try again.");
    },
  });

  const onSubmit = (data) => {
    if (step === 1) {
      checkEmailMutate(data.email);
      setUserData((prev) => ({ ...prev, email: data.email }));
      setStep(2);
    } else if (step === 2) {
      const updatedData = {
        email: data.email,
        username: data.username,
        password: data.password,
        name: data.name,
      };
      console.log(updatedData)
      setUserData(updatedData);
      checkUsernameMutate(data.username);
    }
  };

  return (
    <form
      className="bg-gradient-to-b from-[rgba(153,153,153,0.56)] to-[rgba(51,51,51,0.37)] p-8 rounded-3xl min-w-[430px] space-y-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6 flex justify-center">
        <div className="w-24 h-12 flex items-center justify-center rounded">
          <span>Logo</span>
        </div>
      </div>

      <div className="space-y-5">
        {step === 1 ? (
          <SignupEmail register={register} errors={errors} />
        ) : (
          <SignUpUser register={register} errors={errors} />
        )}
      </div>

      <div className="text-center text-xs">
        Already have an account?{" "}
        <Link to="/login" className="text-secondary">
          Login
        </Link>
      </div>
    </form>
  );
}

export default SignUpForm;
