import React from 'react'

export default function Hero() {
  return (
    <div>
           {/* Hero Section */}
           <section className="bg-gradient-to-r from-green-50 to-green-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Buy and Sell Second Hand Books
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                Find your next great read at half the price or sell your used books.
                Join our community of book lovers today!
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <a href="#" className="bg-green-700 text-white text-center px-6 py-3 rounded-md hover:bg-green-800 font-medium">
                  Buy Books
                </a>
                <a href="#" className="bg-amber-500 text-white text-center px-6 py-3 rounded-md hover:bg-amber-600 font-medium">
                  Sell Books
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/api/placeholder/500/400" 
                alt="Books Display" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
