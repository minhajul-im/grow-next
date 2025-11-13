import React from "react";

interface ContentLayoutProps {
  children: React.ReactNode;
  className?: string;
  childClass?: string;
}
export const ContentLayout = ({
  children,
  className,
  childClass,
}: ContentLayoutProps) => {
  return (
    <article
      className={`w-[95%] xl:w-[1100px] 2xl:w-[1195px] mx-auto ${
        className ?? ""
      }`}>
      <section className={`mx-2 ${childClass ?? ""}`}>{children}</section>
    </article>
  );
};
