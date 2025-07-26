
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ServiceCard({ service, onBook }: any) {
  return (
    <div className="border border-gray-700 rounded-sm  shadow-md p-4 flex items-center justify-between ">
      {/* Left: Name & Price */}
      <div className="flex flex-col">
        <h3 className="text-md font-semibold text-gray-400">{service.name}</h3>
        <p className="text-sm text-gray-300">₹{service.price}</p>
      </div>

      {/* Right: Book Button */}
      <button
        onClick={() => onBook(service)}
        className="border border-gray-700 cursor-pointer text-white px-6 py-2 rounded-md shadow-md  text-sm w-full max-w-[80px] ml-4"
      >
        Book
      </button>
    </div>
  );
}
