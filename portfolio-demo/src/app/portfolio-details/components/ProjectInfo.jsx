export default function ProjectInfo({ info }) {
  return (
    <div className="bg-white shadow-[0px_0px_30px_rgba(0,0,0,0.1)] p-7.5 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Project information</h3>

      <ul className="space-y-3 text-gray-700 text-[15px]">
        <li>
          <strong>Category:</strong> {info.category}
        </li>
        <li>
          <strong>Client:</strong> {info.client}
        </li>
        <li>
          <strong>Project date:</strong> {info.date}
        </li>
        <li>
          <strong>Project URL:</strong>{" "}
          <a href={info.url} className="text-blue-600 hover:underline">
            {info.url}
          </a>
        </li>
      </ul>
    </div>
  );
}
