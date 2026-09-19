'use client';

import Link from 'next/link';

export default function Products() {
  const products = [
    { id: 1, name: 'Solvevia™ Pet Hair Remover', price: 19.99, emoji: '🐕' },
    { id: 2, name: 'Premium Grooming Set', price: 49.99, emoji: '✨' },
    { id: 3, name: 'Cat Grooming Brush', price: 14.99, emoji: '🐈' },
    { id: 4, name: 'Professional Clipper', price: 79.99, emoji: '✂️' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-orange-500 text-white p-4 flex justify-between">
        <Link href="/" className="text-2xl font-bold">🐕 Solvevia™</Link>
        <Link href="/cart" className="hover:underline">Cart</Link>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-10">Our Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg">
              <div className="text-6xl mb-4">{product.emoji}</div>
              <h2 className="font-bold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-orange-500 font-bold text-lg mb-4">${product.price}</p>
              <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
