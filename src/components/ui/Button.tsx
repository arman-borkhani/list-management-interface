import { type ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  variant?: "default" | "outline" | "destructive";
};

const Button = ({
  className = "",
  children,
  variant = "default",
  ...props
}: Props) => {
  const base =
    "px-4 py-2 text-sm font-medium rounded-lg transition focus:outline-none focus:ring-3 ring-neutral-300";
  const styles = {
    default: "bg-neutral-900 text-neutral-50 hover:bg-neutral-800",
    outline: "border border-neutral-300 text-neutral-950 hover:bg-neutral-100",
    destructive:
      "border border-red-300 text-red-600 hover:bg-red-50 ring-rose-200",
  };
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
