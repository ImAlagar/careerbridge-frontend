

const FloatingInput = ({
  label,
  type = "text",
  value,
  onChange,
  error
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          block w-full px-4 py-3 text-sm bg-white rounded-md border-2
          transition-all duration-200 ease-in-out peer
          ${error 
            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
            : "border-gray-300 hover:border-gray-400 focus:border-black"
          }
        `}
      />

      <label
        className={`
          absolute left-4 bg-white px-1 pointer-events-none transition-all duration-200

          ${value 
            ? "-top-2.5 text-xs text-black"     // has value
            : "top-3 text-gray-500"             // empty state
          }

          peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-black
        `}
      >
        {label}
      </label>

      {error && (
        <p className="mt-1 text-xs text-red-600">{error}</p>
      )}
    </div>
  );
};

export default FloatingInput;
