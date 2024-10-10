import InputField from "../../Components/InputField";

function ResetPasswordForm() {
  return (
    <div className="bg-gradient-to-b from-[rgba(153,153,153,0.56)] to-[rgba(51,51,51,0.37)] p-8 rounded-3xl min-w-[430px]">
      <div className="mb-6 flex justify-center">
        <div className="w-24 h-12  flex items-center justify-center rounded">
          <span>Logo</span>
        </div>
      </div>
      <div className="space-y-5">
        <InputField
          label="New  Password"
          type="password"
          placeholder="Enter New Password"
        />
        <InputField
          label="Confirm Password"
          type="password"
          placeholder="Confirm your Password"
        />
      </div>
      <button
        type="submit"
        className="w-[60%] mx-auto block bg-secondary hover:bg-secondary-hover text-white py-3 rounded-xl transition duration-300 my-7"
      >
        Submit
      </button>
    </div>
  );
}

export default ResetPasswordForm;
