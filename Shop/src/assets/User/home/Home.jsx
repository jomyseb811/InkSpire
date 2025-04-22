import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import { UseBook } from '../components/UseBook';
import { useCart } from '../AllBooks.jsx/Cartcontext';
// import defaultBookCover from '../assets/default-book-cover.jpg'; // Import a default image

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { data, loading, error } = UseBook();
  const { addToCart } = useCart();

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      text: "BookBins helped me find my favorite childhood books at an affordable price. Great service!",
      name: "Sanjay K",
      role: "Book Lover"
    },
    {
      id: 2,
      text: "I sold my old textbooks and made some money. The process was so simple and user-friendly!",
      name: "Priya M",
      role: "College Student"
    },
    {
      id: 3,
      text: "Quality books at half the price! BookBins has changed how I build my home library.",
      name: "Rahul S",
      role: "Avid Reader"
    }
  ];

  // Categories for browsing section
  const categories = [
    "Fiction", "Non-Fiction", "Educational", "Self-Help", "Business", 
    "Biography", "Children", "Comics", "Science", "History"
  ];

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading books...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">Error loading books: {error.message}</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How BookBins Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-green-700 text-2xl font-bold">{step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {step === 1 && 'Browse Books'}
                  {step === 2 && 'Order Online'}
                  {step === 3 && 'Get Delivery'}
                </h3>
                <p className="text-gray-600">
                  {step === 1 && 'Explore our vast collection of books across multiple categories.'}
                  {step === 2 && 'Select your favorite books and place an order with secure payment options.'}
                  {step === 3 && 'Receive your books at your doorstep and start reading right away!'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">Featured Books</h2>
          <p className="text-center text-gray-600 mb-10">Discover quality second-hand books at amazing prices</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.slice(0, 8).map(book => (
              <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={book.image || defaultBookCover} 
                    alt={`Cover of ${book.title}`} 
                    className="w-full h-64 object-cover cursor-pointer"
                    onClick={() => navigate(`/browse/${book.id}`)}
                  />
                  {book.discount && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                      {book.discount}% OFF
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 truncate">{book.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                  <div className="flex items-center">
                    <span className="text-green-700 font-bold">₹{book.price}</span>
                    {book.originalPrice && (
                      <span className="text-gray-500 line-through text-sm ml-2">₹{book.originalPrice}</span>
                    )}
                  </div>
                  <button 
                    onClick={() => addToCart(book)}
                    className="mt-3 w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button 
              onClick={() => navigate('/browse')}
              className="border-2 border-green-700 text-green-700 px-6 py-2 rounded-md hover:bg-green-50 font-medium transition-colors"
            >
              View All Books
            </button>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Browse by Category</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => navigate(`/browse?category=${category}`)}
                className="bg-green-50 hover:bg-green-100 text-green-800 text-center py-4 rounded-lg transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sell Books Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Sell Your Used Books</h2>
              <p className="text-gray-700 mb-6">
                Do you have books that you've already read and are just collecting dust?
                Sell them on BookBins and make some extra cash while helping other readers find affordable books!
              </p>
              <ul className="mb-6 space-y-2">
                {[
                  "Free listing of books",
                  "Hassle-free pickup",
                  "Quick payment to your account"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-700 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => navigate('/sell')}
                className="bg-amber-500 text-white px-6 py-3 rounded-md hover:bg-amber-600 inline-block font-medium transition-colors"
              >
                Start Selling
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/selling-books.jpg" 
                alt="Person selling used books" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow">
                <div className="mb-4 text-amber-500">
                  {Array(5).fill().map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="font-medium">
                  <p className="text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="mb-6">Stay updated with new arrivals, special offers, and reading recommendations.</p>
            <form className="flex flex-col sm:flex-row sm:justify-center gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="px-4 py-3 rounded sm:rounded-r-none text-gray-800 focus:outline-none flex-grow"
                required
              />
              <button 
                type="submit" 
                className="bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded sm:rounded-l-none font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;