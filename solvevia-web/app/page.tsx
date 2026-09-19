'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart([...cart, { name: 'Solvevia™ Pet Hair Remover', price: 19.99 }]);
    alert('Added to cart!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Navigation */}
      <nav className="bg-orange-500 text-white p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">🐕 Solvevia™</div>
        <div className="flex gap-4">
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/cart" className="hover:underline">Cart ({cart.length})</Link>
          <Link href="/profile" className="hover:underline">Profile</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Solvevia™ Pet Hair Remover</h1>
        <p className="text-2xl text-gray-600 mb-8">Less Fur. Less Mess. Happier Pets.</p>
        
        {/* Product Image */}
        <div className="bg-white rounded-lg p-10 mb-8 inline-block">
          <div className="text-9xl">🐕</div>
        </div>

        {/* Price & CTA */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
          <p className="text-4xl font-bold text-orange-500 mb-4">$19.99</p>
          <button
            onClick={addToCart}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600"
          >
            Add to Cart
          </button>
        </div>

        {/* Benefits */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-2">🐕</div>
            <h3 className="font-bold text-gray-800">Removes Loose Fur</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-2">🧼</div>
            <h3 className="font-bold text-gray-800">Easy to Clean</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-2">✋</div>
            <h3 className="font-bold text-gray-800">Comfortable Use</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-2">🏠</div>
            <h3 className="font-bold text-gray-800">Less Hair Around</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
