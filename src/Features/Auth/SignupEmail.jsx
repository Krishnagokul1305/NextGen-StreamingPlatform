import InputField from "../../Components/InputField";
import PropTypes from 'prop-types';

function SignupEmail({ register, errors }) {
  return (
    <>
      <InputField
        label="Name"
        type="text"
        placeholder="Enter your name"
        register={register("name", {
          required: "Name is required",
        })}
        error={errors.name}
      />
      <InputField
        label="Email"
        type="email"
        placeholder="Enter Email Address"
        register={register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email address",
          },
        })}
        error={errors.email}
      />
      <button
        type="submit"
        className="block mx-auto w-[60%] bg-secondary hover:bg-secondary-hover text-white py-3 rounded-xl transition duration-300 my-7"
      >
        Next
      </button>
    </>
  );
}

SignupEmail.defaultProps = {
  errors: null,
};

SignupEmail.propTypes = {
  register: PropTypes.object.isRequired,
  errors: PropTypes.object,
};

export default SignupEmail;
