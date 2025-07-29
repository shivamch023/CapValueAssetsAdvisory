"use client";
import { motion } from "framer-motion";
import { useCart } from "@/app/context/CartContext";

interface Service {
  name: string;
  price: number;
  image: string;
}

export default function ServiceCard({ service }: { service: Service }) {
  const {
    cart,
    addToCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  const cartItem = cart.find((item) => item.name === service.name);

  const handleAdd = () => {
    if (!cartItem) {
      addToCart(service);
    } else {
      incrementQuantity(service.name);
    }
  };

  const handleRemove = () => {
    if (cartItem?.quantity === 1) {
      decrementQuantity(service.name);
    } else if (cartItem) {
      decrementQuantity(service.name);
    }
  };

  return (
    <div className="border border-gray-700 rounded shadow-md px-4 h-[80px] flex justify-between items-center">
      <div className="flex flex-col justify-center">
        <h3 className="text-sm font-semibold text-gray-200">{service.name}</h3>
        <p className="text-xs text-gray-400">₹{service.price}</p>
      </div>
      <div>
        {cartItem ? (
          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleRemove}
              className="px-3 py-1 border cursor-pointer border-gray-700 hover:bg-gray-900/60 text-white rounded"
            >
              -
            </motion.button>
            <span className="text-gray-200 font-semibold">{cartItem.quantity}</span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleAdd}
              className="px-3 py-1 border cursor-pointer border-gray-700 hover:bg-gray-900/60 text-white rounded"
            >
              +
            </motion.button>
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleAdd}
            className="px-4 py-1 cursor-pointer border border-gray-700 shadow-md hover:bg-gray-900/50 text-white rounded text-sm"
          >
            Add
          </motion.button>
        )}
      </div>
    </div>
  );
}
