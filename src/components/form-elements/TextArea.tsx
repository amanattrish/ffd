import { TextareaHTMLAttributes } from "react";

type TextAreaProps = {
  error?: string;
  className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = ({
  error,
  className = "",
  ...textareaProps
}: TextAreaProps) => {
  return (
    <div className="w-full">
      <textarea
        className={`w-full text-sm px-4 py-2 border rounded-lg bg-white
          placeholder:text-gray-400
          focus:ring-2 focus:ring-primary/30 focus:outline-none
          resize-none
          ${error ? "border-red-500" : "border-gray-300"}
          ${className}
        `}
        {...textareaProps}
      />

      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default TextArea;
