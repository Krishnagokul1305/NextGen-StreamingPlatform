import InputField from "../../Components/InputField";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

function SignUpUser({ register, errors }) {
  const { watch } = useForm();

  return (
    <>
      <InputField
        label="Username"
        type="text"
        placeholder="Enter Username"
        register={register("username", {
          required: "Username is required",
        })}
        error={errors.username}
      />

      <InputField
        label="Password"
        type="password"
        placeholder="Enter Password"
        register={register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
          },
        })}
        error={errors.password}
      />

      <div className="flex items-center text-[#C8C8C8] mt-4 text-xs">
        <input type="checkbox" id="rememberMe" className="mr-2 accent-input" />
        <label htmlFor="rememberMe">
          I agree to all the <span className="text-secondary">Terms</span> and{" "}
          <span className="text-secondary">Privacy Policies</span>
        </label>
      </div>

      <button
        type="submit"
        className="w-[60%] mx-auto block bg-secondary hover:bg-secondary-hover text-white py-3 rounded-xl transition duration-300 my-7"
      >
        Create Account
      </button>
    </>
  );
}

SignUpUser.propTypes = {
  register: PropTypes.object.isRequired,
  errors: PropTypes.object,
};

export default SignUpUser;
