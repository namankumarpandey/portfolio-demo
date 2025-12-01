"use client";

import Slider from "@/app/portfolio-details/components/Slider";
import ProjectInfo from "@/app/portfolio-details/components/ProjectInfo";
import ProjectDescription from "@/app/portfolio-details/components/ProjectDescription";
import { portfolioDetails } from "@/data/portfolioDetailsData";

export default function PortfolioDetails() {
  return (
    <section id="portfolio-details" className="py-15 px-0">
      <div className="mx-auto px-3">
        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-10">

          <Slider images={portfolioDetails.images} />

          <div>
            <ProjectInfo info={portfolioDetails.info} />

            <ProjectDescription
              title={portfolioDetails.title}
              description={portfolioDetails.description}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
