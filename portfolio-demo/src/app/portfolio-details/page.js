import PortfolioDetails from "@/components/PortfolioDetails";

export default function PortFolio() {
  return (
    <div>
      <div className="py-30 text-[#212529] bg-[#f9f9f9] text-center ">
        <div>
          <h1 className="font-bold text-[42px] mb-2.5">Portfolio Details</h1>
          <nav>
            <ol className="flex flex-wrap justify-center font-normal text-base">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="pl-2.5 before:content-['/'] before:inline-block before:pr-2.5 before:text-[color-mix(in_srgb,var(--default-color),transparent_70%)]">
                Portfolio Details
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <PortfolioDetails />
    </div>
  );
}
