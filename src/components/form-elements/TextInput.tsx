import { InputHTMLAttributes } from "react";

type TextInputProps = {
  error?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({
  error,
  className = "",
  ...inputProps
}: TextInputProps) => {
  return (
    <div className="w-full">
      <input
        className={`w-full h-8 text-sm px-4 border rounded-lg bg-white
          placeholder:text-gray-400
          focus:ring-2 focus:ring-primary/30 focus:outline-none
          ${error ? "border-red-500" : "border-gray-300"}
          ${className}
        `}
        {...inputProps}
      />

      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default TextInput;
