import React from "react";
import { BaseLayout } from "@/layout";
import { ContentLayout } from "@/components/common/common";

export default function FeaturesPage() {
  return (
    <BaseLayout>
      <ContentLayout>
        <div className="text-left mt-[4.5rem]">
          <h1 className="text-[40px] md:text-[42px] lg:text-[48px] leading-[104%] font-extrabold from-mild to-dark bg-gradient-to-b bg-clip-text text-transparent">
            Why Choose &nbsp;
            <span className="from-mild to-dark bg-gradient-to-b bg-clip-text font-extrabold">
              GrowNext&nbsp;
            </span>
            ERP?
          </h1>
          <h2 className="text-left mt-[1rem] text-[20px] leading-[27px] text-secondary">
            Lorem ipsum dolor sit amet consectetur. Rhoncus porttitor velit
            bibendum rutrum pharetra semper. Cursus nunc ultrices nulla dapibus
            purus semper penatibus sit quis. Morbi amet gravida scelerisque
            proin amet morbi.
          </h2>
        </div>
      </ContentLayout>
    </BaseLayout>
  );
}
