import Link from "next/link";
import { ReactNode } from "react";

interface NavbarItemProps {
  href: string;
  children: string | ReactNode;
  isExternal?: boolean;
};

const baseStyle = 'py-1 px-2 rounded hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 font-medium transition-all'

export function NavbarItem({href, children, isExternal}: NavbarItemProps) {
  return isExternal ? (
    <a href={href} className={baseStyle} target="_blank" rel="noopener noreferrer">{children}</a>
  ) : (
    <Link href={href} className={baseStyle}>{children}</Link>
  )
};
