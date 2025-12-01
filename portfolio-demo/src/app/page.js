"use client";

import Cards from "@/components/Portfolio/Cards";
import TabsSection from "@/components/TabsSection";
import ClientSection from "@/components/Clients/ClientSection";
import EndSection from "@/components/Clients/EndSection";

import ServicesSectionTitle from "@/components/Services/ServicesSectionTitle";
import ServicesCards from "@/components/Services/ServicesCards";

import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import TestimonialsSectionTitle from "@/components/Testimonials/TestimonialsSectionTitle";
import TestimonialsCards from "@/components/Testimonials/TestimonialsCards";

export default function Home() {
  // All available tabs
  const tabs = ["All", "App", "Product", "Branding", "Books"];

  const [activeTab, setActiveTab] = useState("All");
  return (
    <>
      <section className="py-15 overflow-clip">
        {/* Container */}
        <div className="tablet:max-w-[540px] desktop:max-w-[720px] huge:max-w-[960px] px-3 mx-auto w-full">
          {/* Header and Tabs Same Row */}
          <div className="flex flex-col huge:flex-row items-center">
            {/* Left: Header */}
            <div className="px-3 w-full max-w-full">
              <h3 className="font-medium text-2xl mb-[5px] leading-[1.2] mt-0 text-black">
                Hey, I'm Johan Stanworth
              </h3>
              <p className="text-[15px] mt-0 mb-4">
                Voluptatem sit minima et dignissimos earum fuga vel nulla quidem
                aut quam
              </p>
            </div>

            {/* Right: Tabs */}
            <div className="text-center w-full max-w-full px-3">
              <TabsSection activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </div>

          {/* Cards Grid */}
          <Cards activeTab={activeTab} />
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-15 text-[#212529] bg-[#f9f9f9] text-center">
        {/* Section Title */}
        <ClientSection />
        {/* End Section Title */}
        <EndSection />
      </section>

      {/* Services Section */}
      <section className="py-15 text-[#212529] bg-white overflow-clip">
        {/* Services Section Title */}
        <ServicesSectionTitle />
        {/* Services Cards */}
        <ServicesCards />
      </section>

      {/* Testimonials Section */}
      <section className="py-15 text-[#212529] bg-white overflow-clip">
        {/* Testimonials Section Title */}
        <TestimonialsSectionTitle />
        {/* Testimonials Cards */}
        <TestimonialsCards />
      </section>
    </>
  );
}
