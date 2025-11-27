import { FiArrowRight } from "react-icons/fi";

export default function ServicesItem({ data }) {
  return (
    <div className="px-3 mt-6 bg-white">
      {/* Container */}
      <div className="p-10 bg-[#ffffff] shadow-[0_0_30px_rgba(0,0,0,0.1)] h-full flex flex-col">
        <div className="icon w-12 h-12 font-normal text-[56px] mb-[50px] relative before:content-[''] before:h-full before:w-full before:absolute before:rounded-full before:bg-[var(--heading-color)]/5 before:top-2.5 before:-right-5 text-[var(--heading-color)]/70">
          {data?.icon}
        </div>

        <div className="border-b-4 border-gray-200 grid w-fit mb-5">
          <h3 className="pb-2 font-bold leading-[1.2] truncate">
            {data?.title}
          </h3>
        </div>

        <p className="text-sm leading-6 mb-0 grow">{data?.description}</p>

        <a href={data?.link} className="inline-block mt-[15px]">
          Read more <FiArrowRight className="text-xl inline" />
        </a>
      </div>
    </div>
  );
}
