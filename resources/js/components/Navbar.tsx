import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

function Navbar({ currentRoute }: { currentRoute: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (route: string) => currentRoute === route;

  return (
    <nav className="bg-blue-500 text-white h-16 fixed top-0 w-full z-50 flex items-center justify-between px-6 shadow-md">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo and mobile menu button */}
          <div className="flex items-center space-x-4">
            <button 
              className="md:hidden focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/images/sm.jpg" 
                className="h-8 w-8 rounded-full border-2 border-white" 
                alt="Logo" 
              />
              <span className="font-bold text-xl hidden sm:block">Samachar House</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`px-3 py-2 rounded-lg transition-all duration-300 ${isActive('/') ? 
                'bg-white text-blue-600 font-semibold shadow-md' : 
                'hover:bg-blue-700 hover:shadow-md'}`}
            >
              Home
            </Link>
            <Link 
              href="/politics" 
              className={`px-3 py-2 rounded-lg transition-all duration-300 ${isActive('/politics') ? 
                'bg-white text-blue-600 font-semibold shadow-md' : 
                'hover:bg-blue-700 hover:shadow-md'}`}
            >
              Politics
            </Link>
            <Link 
              href="/sports" 
              className={`px-3 py-2 rounded-lg transition-all duration-300 ${isActive('/sports') ? 
                'bg-white text-blue-600 font-semibold shadow-md' : 
                'hover:bg-blue-700 hover:shadow-md'}`}
            >
              Sports
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-blue-700 mt-2 rounded-lg shadow-xl pb-4">
            <div className="flex flex-col space-y-2 px-4 pt-2">
              <Link
                href="/"
                className={`px-3 py-2 rounded-lg ${isActive('/') ? 
                  'bg-white text-blue-600 font-semibold' : 
                  'hover:bg-blue-600'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/politics"
                className={`px-3 py-2 rounded-lg ${isActive('/politics') ? 
                  'bg-white text-blue-600 font-semibold' : 
                  'hover:bg-blue-600'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Politics
              </Link>
              <Link
                href="/sports"
                className={`px-3 py-2 rounded-lg ${isActive('/sports') ? 
                  'bg-white text-blue-600 font-semibold' : 
                  'hover:bg-blue-600'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sports
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;