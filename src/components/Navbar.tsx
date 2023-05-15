import { FaDove, FaGithub } from 'react-icons/fa';
import { NavbarItem } from './NavbarItem';

interface NavbarProps {
  title?: string;
};

export function Navbar({title}: NavbarProps) {
  return (
    <div className="w-full bg-zinc-950 border-b border-zinc-900">
      <nav className="max-w-7xl w-full mx-auto px-6 py-4 flex items-center justify-between">

        <div className='flex items-center gap-2'>
          <div className="flex items-center gap-2">
            <FaDove className="text-red-600 text-lg" />
            <span className="font-semibold text-xl text-zinc-50">Pigeon</span>
          </div>

          {title && (
            <div className='flex items-center gap-2'>
              <div className='w-1 h-1 rounded-full bg-zinc-500'></div>
              <span className='italic text-sm text-zinc-400'>{title}</span>
            </div>  
          )}

        </div>

        <div className="flex items-center gap-2 text-sm">
          <NavbarItem href='#' isExternal>Home</NavbarItem>
          <NavbarItem href='#' isExternal>Home</NavbarItem>
          <NavbarItem href='#' isExternal>Home</NavbarItem>
        </div>

        <div className="flex items-center gap-4">
          <NavbarItem href='https://github.com/ruymon/pigeon' isExternal>
            <FaGithub />
          </NavbarItem>
        </div>
      </nav>
    </div>
  );
};
