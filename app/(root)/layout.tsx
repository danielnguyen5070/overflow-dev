import Navbar from "@/components/navigation/navbar";
import React from "react";

const LayoutRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default LayoutRoot;
