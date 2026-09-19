'use client';

import Link from 'next/link';

export default function Cart() {
  const cartItems = [
    { id: 1, name: 'Solvevia™ Pet Hair Remover', price: 19.99, quantity: 1 }
  ];

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-orange-500 text-white p-4 flex justify-between">
        <Link href="/" className="text-2xl font-bold">🐕 Solvevia™</Link>
        <Link href="/products" className="hover:underline">Products</Link>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty</p>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center border-b pb-4 mb-4">
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-gray-600">${item.price} x {item.quantity}</p>
                  </div>
                  <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-bold">Total:</p>
                <p className="text-2xl font-bold text-orange-500">${total.toFixed(2)}</p>
              </div>
              <Link href="/checkout" className="w-full bg-orange-500 text-white py-3 rounded font-bold hover:bg-orange-600 block text-center">
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
