"use client";

import { useId } from '@mantine/hooks';
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
};

export function Input({labelText, id, ...props}: InputProps) {
  const uuid = useId(id);

  return (
    <>
      <label htmlFor={uuid} className="sr-only">{labelText || 'Input'} </label>
      <input id={uuid} className="w-full bg-zinc-900/25 rounded-md border-0 py-1.5 dark:text-zinc-400 ring-1 ring-inset ring-zinc-800 placeholder:text-zinc-600 sm:text-sm sm:leading-6 px-3" {...props} />
    </>
  );
};
