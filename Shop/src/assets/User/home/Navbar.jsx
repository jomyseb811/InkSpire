import React,{useState} from 'react'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/InkSpire.logo.png" alt="BookBins Logo" className="h-10" />
              <span className="ml-2 text-xl font-bold text-green-700">InkSpire</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href='/home' className="text-gray-700 hover:text-green-700">Home</a>
              <a href="#" className="text-gray-700 hover:text-green-700">Buy Books</a>
              <a href="#" className="text-gray-700 hover:text-green-700">Sell Books</a>
              <a href="#" className="text-gray-700 hover:text-green-700">About Us</a>
              <a href="#" className="text-gray-700 hover:text-green-700">Contact</a>
            </nav>

            {/* Login/Register */}
            <div className="hidden md:flex items-center space-x-4">
              <a href='/log' className="text-gray-700 hover:text-green-700">Login</a>
              <a href='/' className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Register</a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-3 py-3 border-t">
              <div className="flex flex-col space-y-3">
                <a href="#" className="text-gray-700 hover:text-green-700">Home</a>
                <a href="#" className="text-gray-700 hover:text-green-700">Buy Books</a>
                <a href="#" className="text-gray-700 hover:text-green-700">Sell Books</a>
                <a href="#" className="text-gray-700 hover:text-green-700">About Us</a>
                <a href="#" className="text-gray-700 hover:text-green-700">Contact</a>
                <div className="flex space-x-4 pt-3">
                  <a href="#" className="text-gray-700 hover:text-green-700">Login</a>
                  <a href="#" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Register</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default Navbar
