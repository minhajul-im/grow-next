import React from "react";
import { BaseLayout } from "@/layout";
import { HeroSection } from "./_components/Hero";
import { FeaturesSection } from "./_components/Features";
import { AdvantageSection } from "./_components/Advantage";
import { LevelUpSection } from "./_components/LevelUp";
import { PlanSection } from "./_components/Plan";

export default function HomePage() {
  return (
    <BaseLayout>
      <section className="flex flex-col mt-[60px] gap-y-[4.5rem]">
        <HeroSection />
        <FeaturesSection />
        <AdvantageSection />
        <LevelUpSection />
        <PlanSection />
      </section>
    </BaseLayout>
  );
}
