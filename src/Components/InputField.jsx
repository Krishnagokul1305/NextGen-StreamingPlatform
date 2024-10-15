import PropTypes from 'prop-types';

function InputField({ type, id, disabled, register, error, label, placeholder }) {
  return (
    <div className="flex flex-col">
      <label className="text-white mb-2">{label}</label>
      <input
        type={type}
        id={id}
        disabled={disabled}
        {...register}
        placeholder={placeholder}
        className={`p-4 rounded-lg bg-input border ${
          error ? 'border-red-500' : 'border-gray-700'
        } text-white focus:outline-none font-light ${
          disabled ? 'bg-gray-400 cursor-not-allowed' : ''
        }`}
      />
      {error && <p className="text-red-500 mt-1">{error?.message}</p>}
    </div>
  );
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  register: PropTypes.object.isRequired,
  error: PropTypes.object,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

InputField.defaultProps = {
  disabled: false,
  placeholder: '',
  error: null,
};

export default InputField;
