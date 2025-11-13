import React from "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="rounded-[32px] px-[1.5rem] py-[0.75rem] bg-gradient-to-b from-mild to-dark text-light">
      {children}
    </button>
  );
};
