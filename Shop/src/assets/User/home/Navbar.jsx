import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';  

function Navbar() {
  const [userId, setUserId] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUserId = localStorage.getItem('loggedUserId');
    setUserId(loggedUserId);
  }, []);

  const handleClick = () => {
    localStorage.clear();
    setUserId(null);
    navigate('/login'); // redirect to login after logout
  };

  return (
    <nav>
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/InkSpire.logo.png" alt="InkSpire Logo" className="h-10" />
              <span className="ml-2 text-xl font-bold text-green-700">InkSpire</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-700">Home</Link>
              <Link to="/browse" className="text-gray-700 hover:text-green-700">Buy Books</Link>
              <Link to="/sell" className="text-gray-700 hover:text-green-700">Sell Books</Link>
              <Link to="/about" className="text-gray-700 hover:text-green-700">About Us</Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-700">Contact</Link>
            </div>

            {/* Login/Register */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/cart" className="flex items-center text-gray-700 hover:text-green-700">
                <FaShoppingCart className="text-2xl mr-2" />
              </Link>  
              {
                userId ? (
                  <button onClick={handleClick} className="text-gray-700 hover:text-red-600">Logout</button>
                ) : (
                  <>
                    <Link to="/login" className="text-gray-700 hover:text-green-700">Login</Link>
                    <Link to="/reg" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Register</Link>
                  </>
                )
              }   
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-3 py-3 border-t">
              <div className="flex flex-col space-y-3">
                <Link to="/" className="text-gray-700 hover:text-green-700">Home</Link>
                <Link to="/browse" className="text-gray-700 hover:text-green-700">Buy Books</Link>
                <Link to="/sell" className="text-gray-700 hover:text-green-700">Sell Books</Link>
                <Link to="/about" className="text-gray-700 hover:text-green-700">About Us</Link>
                <Link to="/contact" className="text-gray-700 hover:text-green-700">Contact</Link>
                <div className="flex space-x-4 pt-3">
                  {
                    userId ? (
                      <button onClick={handleClick} className="text-gray-700 hover:text-red-600">Logout</button>
                    ) : (
                      <>
                        <Link to="/login" className="text-gray-700 hover:text-green-700">Login</Link>
                        <Link to="/reg" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Register</Link>
                      </>
                    )
                  }
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </nav>
  );
}

export default Navbar;
