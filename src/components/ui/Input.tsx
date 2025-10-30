import type { ComponentProps } from "react";

type Props = ComponentProps<"input">;

const Input = ({ className = "", ...props }: Props) => {
  return (
    <input
      className={`flex w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-base placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-3 ring-neutral-300 ${className}`}
      {...props}
    />
  );
};

export default Input;
