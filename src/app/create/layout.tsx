import { GridContainer } from "@/components/GridContainer";
import { Navbar } from "@/components/Navbar";
import { ReactNode } from "react";

interface CreateLayoutProps {
  children: ReactNode;
};

export const metadata = {
  title: 'Pigeon | Create',
}

export default function CreateLayout({children}: CreateLayoutProps) {
  return (
    <main className="w-full flex flex-col gap-8">
      <Navbar title="Create"/>
      <GridContainer>
        {children}
      </GridContainer>
    </main>
  );
};