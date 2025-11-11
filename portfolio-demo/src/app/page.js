import Cards from "@/components/Cards";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Home() {
  return (
    <div>
      {/* PortFolio Section */}
      <section className="py-15 px-0">
        {/* Headings  */}
        <div className="md:flex items-center">
          <div className="px-3 shrink-0">
            <h3 className="font-medium text-2xl mb-[5px] leading-[1.2] mt-0 text-black">
              Hey, I'm Johan Stanworth
            </h3>
            <p className="text-[15px] mt-0 mb-4">
              Voluptatem sit minima et dignissimos earum fuga vel nulla quidem
              aut quam
            </p>
          </div>

          {/* Category Menu */}
          <div className="text-center w-full max-w-full px-3 mt-0">
            <ul className="mx-auto mb-5 mt-0">
              <li className="inline-block p-0 mx-[5px] sm:ml-0">All</li>
              <li className="inline-block p-0 ml-0 mr-[5px] sm:ml-0">App</li>
              <li className="inline-block p-0 ml-0 mr-[5px] sm:ml-0">
                Product
              </li>
              <li className="inline-block p-0 ml-0 mr-[5px] sm:ml-0">
                Branding
              </li>
              <li className="inline-block p-0 ml-0 mr-[5px] sm:ml-0">Books</li>
            </ul>
          </div>
        </div>

        {/* Cards Section */}
        <Cards />
      </section>
    </div>
  );
}
