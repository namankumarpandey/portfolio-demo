import ServicesItem from "@/components/Services/ServicesItem";
import { servicesData } from "@/data/servicesData";

export default function ServicesCards() {
  return (
    <div className="px-3 tablet:max-w-[540px] desktop:max-w-[720px] huge:max-w-[960px] mx-auto">
      <div className="grid grid-cols-1 desktop:grid-cols-2 huge:grid-cols-3">
        {/* Services Item */}
        {servicesData?.map((item) => (
          <ServicesItem key={item?.id} data={item} />
        ))}
      </div>
    </div>
  );
}
