import { ReactNode } from "react";

interface BrowserPreviewProps {
  children: ReactNode;
};

export function BrowserPreview({children}: BrowserPreviewProps) {
  return (
    <figure className="w-1/2 grow min-h-full bg-zinc-900/10 border border-zinc-900 rounded-md p-4">
      <div className="w-full flex justify-between items-center gap-4">
        <div className="px-2 py-0.5 text-sm font-medium rounded bg-zinc-900/50 text-zinc-600 grow flex items-center gap-1">
          <span className="text-zinc-700 text-xs">https://</span>
          Page Title
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
        </div>
      </div>

      <div className="h-full w-full">
        {children}
      </div>
    </figure>
  );
};
