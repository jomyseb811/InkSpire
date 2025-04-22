import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "./Cartcontext";
export default function ProductPage() {

  const { id } = useParams();
  const { addToCart } = useCart();

  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost:3000/books/${id}`)
      .then(res => {
        setBook(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setError("Failed to load book details");
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return (
    <div className="flex flex-col items-center justify-center h-[50vh]">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mb-4"></div>
      <p className="text-lg text-gray-600">Loading book details...</p>
    </div>
  );

  if (error) return (
    <div className="text-red-500 text-center py-8 text-xl">
      {error}
    </div>
  );

  if (!book) return (
    <div className="text-red-500 text-center py-8 text-xl">
      Book not found
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-lg p-6 md:p-8">
        {/* Book Image */}
        <div className="flex-1 min-w-[300px] max-w-md">
          <img 
            src={book.image} 
            alt={book.title}
            className="w-full h-auto rounded-lg shadow-md hover:scale-102 transition-transform duration-300"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://via.placeholder.com/300x400?text=No+Image";
            }}
          />
        </div>
        
        {/* Book Details */}
        <div className="flex-1 min-w-[300px]">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{book.title}</h1>
          <h2 className="text-xl text-gray-600 mb-6">By {book.author}</h2>
          
          <div className="flex items-center gap-6 mb-8">
            <span className="text-2xl font-bold text-red-500">₹{book.price}</span>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              {book.genre}
            </span>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-8">{book.description}</p>
          
          <div className="space-y-4">
            <button onClick={()=> addToCart(book)}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              Add to Cart
              <span className="text-lg">🛒</span>
            </button>
            
            <div className="flex gap-4">
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-300">
                Add to Wishlist
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-300">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}