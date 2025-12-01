export default function ProjectDescription({ title, description }) {
  return (
    <div className="pt-7.5">
      <h2 className="text-[26px] font-bold mb-5 leading-[1.2]">
        {title}
      </h2>

      <p className="leading-relaxed text-[color-mix(in_srgb,var(--default-color),transparent_30%)]">
        {description}
      </p>
    </div>
  );
}
