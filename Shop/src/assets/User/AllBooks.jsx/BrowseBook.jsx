import React from 'react';
import { UseBook } from '../components/UseBook';

export default function BrowseBook() {
  const { data } = UseBook();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Browse Our Collection</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map(book => (
          <div 
            key={book.id} 
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="relative">
              <img 
                src={book.image} 
                alt={book.title} 
                className="w-full h-72 object-cover hover:opacity-90 transition-opacity"
              />
              {book.discount > 0 && (
                <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                  {book.discount}% OFF
                </div>
              )}
            </div>
            
            <div className="p-5">
              <h3 className="font-bold text-lg mb-1 text-gray-800 line-clamp-2" title={book.title}>
                {book.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 italic">{book.author}</p>
              
              <div className="flex items-center mb-4">
                <span className="text-green-700 font-bold text-lg">₹{book.price}</span>
                {book.discount > 0 && (
                  <span className="text-gray-400 line-through text-sm ml-2">₹{book.originalPrice}</span>
                )}
              </div>
              
              <button 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300
                           focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}