import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
};

const sizeVariants = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-2 text-md',
  lg: 'px-6 py-3 text-lg',
}

export function Button({...props}: ButtonProps) {
  return (
    <button type="button" className="bg-red-600 hover:bg-red-700 text-zinc-50 px-4 py-2 rounded font-medium transition-all text-sm" {...props}>
      {props.children}
    </button>
  );
};
