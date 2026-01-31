import { LabelHTMLAttributes, ReactNode } from "react";

type LabelProps = {
  required?: boolean;
  children: ReactNode;
  className?: string;
} & LabelHTMLAttributes<HTMLLabelElement>;

const Label = ({
  required = false,
  children,
  className = "",
  ...labelProps
}: LabelProps) => {
  return (
    <label
      className={`block text-sm font-bold text-black mb-2 ${className}`}
      {...labelProps}
    >
      {children}
      {required && <span className="text-red-500"> *</span>}
    </label>
  );
};

export default Label;
