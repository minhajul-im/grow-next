import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { ScrollToTop } from "./top-scroll";

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <section className="mt-[60px] mb-[4.5rem]">{children}</section>
      <Footer />
      <ScrollToTop />
    </main>
  );
};
