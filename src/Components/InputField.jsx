function InputField({ label, type, placeholder }) {
  return (
    <div className="flex flex-col">
      <label className="text-white mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="p-4 rounded-lg bg-input border border-gray-700 text-white focus:outline-none font-light"
      />
    </div>
  );
}

export default InputField;
