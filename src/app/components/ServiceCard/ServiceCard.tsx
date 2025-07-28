export default function ServiceCard({
  service,
  onAdd,
  onRemove,
  cart,
}: {
  service: { name: string; price: number; image: string };
  onAdd: (s: { name: string; price: number }) => void;
  onRemove: (name: string) => void;
  cart: { name: string; price: number;  }[];
}) {
  const isSelected = cart.some((item) => item.name === service.name);

  return (
    <div className="border border-gray-700 rounded shadow-md p-4 flex justify-between items-center">
      <div>
        <h3 className="text-md font-semibold text-gray-200">{service.name}</h3>
        <p className="text-sm text-gray-400">₹{service.price}</p>
      </div>
      <div>
        {isSelected ? (
          <button
            onClick={() => onRemove(service.name)}
            className="px-4 py-2 bg-red-600 text-white cursor-pointer text-sm rounded"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={() => onAdd(service)}
            className="px-4 py-2 border border-gray-700 cursor-pointer text-white text-sm rounded"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}
