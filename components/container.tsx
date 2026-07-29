import type React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("w-full mx-auto px-4 md:px-8 xl:px-12", className)}>
      {children}
    </div>
  );
};

export default Container;
