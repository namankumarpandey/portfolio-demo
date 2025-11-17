"use client";
import Cards from "@/components/Cards";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import TabsSection from "@/components/TabsSection";

export default function Home() {
  // All available tabs
  const tabs = ["All", "App", "Product", "Branding", "Books"];

  const [activeTab, setActiveTab] = useState("All");
  return (
    <section className="py-15 overflow-clip">
      {/* Container */}
      <div className="sm:max-w-[540px] md:max-w-3xl lg:max-w-[960px] px-3 mx-auto w-full">
        {/* Header and Tabs Same Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center md:justify-between -mx-3">
          {/* Left: Header */}
          <div className="px-3 shrink-0">
            <h3 className="font-medium text-2xl mb-[5px] leading-[1.2] mt-0 text-black">
              Hey, I'm Johan Stanworth
            </h3>
            <p className="text-[15px] mt-0 mb-4">
              Voluptatem sit minima et dignissimos earum fuga vel nulla quidem
              aut quam
            </p>
          </div>

          {/* Right: Tabs */}
          <TabsSection activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Cards Grid */}
        <Cards activeTab={activeTab} />
      </div>
    </section>
  );
}
