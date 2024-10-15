import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SignupEmail from "./SignupEmail";
import SignUpUser from "./SignUpUser";

function SignUpForm() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      username: "",
      name: "",
    },
  });

  function handleStepOne(data) {
    console.log("Step 1 Data:", data);
    const emailExists = false;

    if (emailExists) {
      toast.error("Email already exists");
    } else {
      setUserData((prev) => ({ ...prev, ...data }));
      setStep(2);
    }
  }

  function handleStepTwo(data) {
    console.log("Step 2 Data:", data);
    const completeData = { ...userData, ...data };
    console.log("Complete Data for Signup:", completeData);
  }

  return (
    <form
      className="bg-gradient-to-b from-[rgba(153,153,153,0.56)] to-[rgba(51,51,51,0.37)] p-8 rounded-3xl min-w-[430px] space-y-5"
      onSubmit={handleSubmit(step === 1 ? handleStepOne : handleStepTwo)}
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
