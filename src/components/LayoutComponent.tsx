import React from "react";

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>Header Content</header>
      {children}
      <footer>Footer Content</footer>
    </div>
  );
};

export default LayoutComponent;
