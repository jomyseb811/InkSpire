import React from 'react'
import Slidewrapper from './Slidewrapper'

export default function Hero() {
  return (
    <Slidewrapper>
      {/* First Slide */}
      <div>
        <section className="bg-gradient-to-r from-green-50 to-green-100 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Escape into stories,
discover new worlds
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                🕮 "A paradise for book lovers,
where stories come alive."


                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <a href='/browse' className="bg-green-700 text-white text-center px-6 py-3 rounded-md hover:bg-green-800 font-medium">
                    Buy Books
                  </a>
                 
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://www.bookswagon.com/bannerimages/85_inr.jpg?v=4.4" 
                  alt="Books Display" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Second Slide */}
      <div>
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Fiction Bestsellers
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                  Explore our collection of bestselling fiction titles from renowned authors.
                  Perfect for your weekend reading!
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <a href="#" className="bg-blue-600 text-white text-center px-6 py-3 rounded-md hover:bg-blue-700 font-medium">
                    Browse Fiction
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://www.bookswagon.com/bannerimages/70_inr.jpg?v=4.4" 
                  alt="Fiction Books" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Third Slide */}
      <div>
        <section className="bg-gradient-to-r from-purple-50 to-purple-100 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Timesquare Best Sellers
                </h1>
                <p className="text-gray-600 text-lg mb-6">
Go grab ! your timesquare best selling books at best Offers
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <a href="#" className="bg-purple-600 text-white text-center px-6 py-3 rounded-md hover:bg-purple-700 font-medium">
                    Find Textbooks
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/BookSplit_Social_Lede.jpg" 
                  alt="Academic Textbooks" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
{/* Fourth Slide */}
<div>
  <section className="bg-gradient-to-r from-purple-100 to-blue-100 py-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Fuel Your Mind,<br /> One Page at a Time
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Dive into tales that touch the soul <br />
            your next favorite book is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <a 
              href="/browse" 
              className="bg-blue-700 text-white text-center px-6 py-3 rounded-md hover:bg-blue-800 font-medium"
            >
              Explore Collection
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img 
            src="https://bookbins.in/wp-content/uploads/2025/02/Home-Page-Banner-The-Power-Of-Discipline-Buy-Online-Bookbins-01.jpg" 
            alt="Books and reading" 
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  </section>
</div>


    </Slidewrapper>
  )
}