import { ReactNode } from "react";

interface GridContainerProps {
  children: ReactNode;
};

export function GridContainer({children}: GridContainerProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      {children}
    </div>
  );
};
