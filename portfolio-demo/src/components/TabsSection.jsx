export default function TabsSection({ activeTab, setActiveTab }) {
  const tabs = ["All", "App", "Product", "Branding", "Books"];

  return (
    <div className="flex gap-6 text-[16px] mt-4 md:mt-0">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative pb-1 transition-all ${
            activeTab === tab
              ? "text-black font-medium"
              : "text-gray-500 hover:text-black"
          }`}
        >
          {tab}

          {/* Active Bottom Border */}
          {activeTab === tab && (
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black"></span>
          )}
        </button>
      ))}
    </div>
  );
}
