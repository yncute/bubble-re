import React from "react";
import { Outlet } from "react-router-dom";

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>Header Content</header>
      <main>
        <Outlet /> {children}
      </main>
      <footer>Footer Content</footer>
    </div>
  );
};

export default LayoutComponent;
