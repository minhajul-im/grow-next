import React from "react";

export const Button = ({
  children,
  size = "default",
  className = "",
}: {
  children: React.ReactNode;
  size?: "default" | "md" | "outline" | "sm" | "explore";
  className?: string;
}) => {
  const styles = {
    default:
      "rounded-default px-[1.5rem] py-[0.75rem] bg-gradient-to-b from-mild to-dark text-light cursor-pointer",
    md: "rounded-default px-[1rem] py-[0.5rem] bg-gradient-to-b from-mild to-dark text-light",
    sm: "text-lg leading-[120%] px-[1rem] py-[0.5rem] rounded-default text-light bg-gradient-to-b from-mild to-dark",
    explore:
      "mt-6 lg:mt-[66px] mx-auto rounded-default bg-gradient-to-b from-secondary to-primary text-light py-[0.5rem] px-[1rem]",
    outline: "rounded-default px-[1.5rem] py-[0.70rem] border border-primary",
  };

  const allStyles = `${styles[size || "default"]} ${className}`;
  return <button className={allStyles}>{children}</button>;
};
