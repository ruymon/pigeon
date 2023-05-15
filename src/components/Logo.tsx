import Link from "next/link";
import { FaDove } from "react-icons/fa";

interface LogoProps {};

export function Logo({}: LogoProps) {
  return (
    <Link href={'/'} className="flex items-center gap-2">
      <FaDove className="text-red-600 text-lg" />
      <span className="font-semibold text-xl text-zinc-50">Pigeon</span>
    </Link>
  );
};
