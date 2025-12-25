import React, { useEffect, useState } from 'react';
import { IoTrash } from "react-icons/io5";


const AddToCart = () => {
  const [cart, setCart] = useState([]);

  const loadCart = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  };

  useEffect(() => {
    loadCart(); // initial load

    window.addEventListener('cartUpdated', loadCart);
    window.addEventListener('storage', loadCart); // multi-tab support

    return () => {
      window.removeEventListener('cartUpdated', loadCart);
      window.removeEventListener('storage', loadCart);
    };
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
const removeproduct = (id) => {
  const updatedCart = cart.filter(item => item.id !== id);

  setCart(updatedCart);
  localStorage.setItem('cart', JSON.stringify(updatedCart));

  console.log('item remove',id)
};
  return (
    <div className="bg-zinc-200 p-4 rounded-xl shadow-md max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
        My Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Cart is empty 🛒</p>
      ) : (
        <>
          <div className="space-y-4 max-h-80 overflow-y-auto scrollbar-hide pr-2">
            {cart.map(product => (
              <div
                key={product.id}
                className=" p-2 bg-white shadow-sm rounded-xl"
              >
                <div className=''>
                  <h1 onClick={()=>{removeproduct(product.id)}} className='text-red-500 cursor-pointer hover:text-red-600 text-right'><IoTrash /></h1>
                </div>
                <div className='flex gap-4 p-3'>
                  <div className="w-20 h-20 flex items-center justify-center bg-orange-50 rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                <div className="flex flex-col justify-center flex-1">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h2>

                  <p className="text-sm text-gray-500">
                    ₹{product.price} × {product.qty}
                  </p>

                  <h4 className="text-orange-500 font-bold text-xl">
                    ₹{(product.price * product.qty).toFixed(2)}
                  </h4>
                </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between items-center border-t pt-4">
            <span className="text-lg font-semibold text-gray-700">
              Total
            </span>
            <span className="text-xl font-bold text-orange-600">
              ₹{total.toFixed(2)}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default AddToCart;
