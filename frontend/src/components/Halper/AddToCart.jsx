import React, { useEffect, useState } from 'react';
import { IoTrash } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";

const AddToCart = () => {
  const [cart, setCart] = useState([]);

  const loadCart = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  };

  useEffect(() => {
    loadCart();
    window.addEventListener('cartUpdated', loadCart);
    return () => window.removeEventListener('cartUpdated', loadCart);
  }, []);

  // 🔼 Increase qty
  const increaseQty = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  // 🔽 Decrease qty
  const decreaseQty = (id) => {
    const updatedCart = cart
      .map(item =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter(item => item.qty > 0);

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  // ❌ Remove item
  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="bg-zinc-200 p-4 rounded-xl shadow-md max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">My Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Cart is empty 🛒</p>
      ) : (
        <>
          <div className="space-y-4 max-h-80 overflow-y-auto scrollbar-hide pr-2">
            {cart.map(product => (
              <div key={product.id} className="bg-white p-3 rounded-xl shadow-sm">

                {/* Delete */}
                <div className="flex justify-end">
                  <button
                    onClick={() => removeItem(product.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <IoTrash />
                  </button>
                </div>

                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-orange-50 flex items-center justify-center rounded-lg">
                    <img src={product.image} className="w-16 h-16 object-contain" />
                  </div>

                  <div className="flex-1">
                    <h2 className="font-semibold">{product.name}</h2>
                    <p className="text-gray-500">₹{product.price}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => decreaseQty(product.id)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded"
                      >
                        <FaMinus />
                      </button>

                      <span className="font-semibold">{product.qty}</span>

                      <button
                        onClick={() => increaseQty(product.id)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded"
                      >
                        <FaPlus />
                      </button>
                    </div>

                    <p className="mt-2 font-bold text-orange-600">
                      ₹{(product.price * product.qty).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-4 flex justify-between border-t pt-4">
            <span className="font-semibold">Total</span>
            <span className="font-bold text-orange-600">
              ₹{total.toFixed(2)}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default AddToCart;
