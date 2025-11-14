"use client";
import Cards from "@/components/Cards";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

export default function Home() {
  // All available tabs
  const tabs = ["All", "App", "Product", "Branding", "Books"];

  const [activeTab, setActiveTab] = useState("All");
  return (
    // <div>
    //   PortFolio Section
    //   <section className="py-15 px-0">
    //     {/* Headings  */}

    //       Category Menu
    //       <div className="text-center w-full max-w-full px-3 mt-0">
    //         <ul className="mx-auto mb-5 mt-0">
    //           <li
    //             className="inline-block p-0 mx-[5px] sm:ml-0"
    //             onClick={() => setActiveTab("All")}
    //           >
    //             All
    //           </li>
    //           <li className="inline-block p-0 ml-0 mr-[5px] sm:ml-0">App</li>
    //           <li className="inline-block p-0 ml-0 mr-[5px] sm:ml-0">
    //             Product
    //           </li>
    //           <li className="inline-block p-0 ml-0 mr-[5px] sm:ml-0">
    //             Branding
    //           </li>
    //           <li className="inline-block p-0 ml-0 mr-[5px] sm:ml-0">Books</li>
    //         </ul>
    //       </div>
    //     </div>

    //     Cards Section
    //     <Cards activeTab={activeTab} />
    //   </section>
    // </div>
    <div>
      {/* PortFolio Section */}
      <section className="py-15 overflow-clip">
        {/* Container */}
        <div className="sm:max-w-[540px] md:max-w-3xl lg:max-w-[960px] px-3 mx-auto w-full">
          <div>
            {/* Header and Tabs in one line */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:items-center md:justify-between -mx-3">
              {/* Left side text (Heading + subtext) */}
              <div className="px-3 shrink-0">
                <h3 className="font-medium text-2xl mb-[5px] leading-[1.2] mt-0 text-black">
                  Hey, I'm Johan Stanworth
                </h3>
                <p className="text-[15px] mt-0 mb-4">
                  Voluptatem sit minima et dignissimos earum fuga vel nulla
                  quidem aut quam
                </p>
              </div>

              {/* Right side tabs */}
              <div className="flex justify-center lg:justify-end mt-0 gap-4 px-3">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative text-base font-normal cursor-pointer p-0 my-0 mx-1.25 md:mr-1.25 mb-[5px] border-b-2 transition-all duration-300 ${
                      activeTab === tab
                        ? "pb-[3px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-black"
                        : "border-transparent text-gray-500 hover:text-black"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <Cards />
          </div>
        </div>
      </section>
    </div>
  );
}
