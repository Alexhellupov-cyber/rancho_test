import React, { useState } from 'react';
import { Users as Horseshoe, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Horseshoe className="h-8 w-8 text-amber-700" />
            <span className="ml-2 text-xl font-bold text-amber-900">Ранчо</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-amber-900 hover:text-amber-700 font-medium">Услуги</a>
            <a href="#gallery" className="text-amber-900 hover:text-amber-700 font-medium">Галерея</a>
            <a href="#testimonials" className="text-amber-900 hover:text-amber-700 font-medium">Отзывы</a>
            <a href="#booking" className="bg-amber-700 text-white px-4 py-2 rounded-md hover:bg-amber-800 transition">Забронировать</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-amber-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-amber-50">
            <a 
              href="#services" 
              className="block px-3 py-2 text-amber-900 font-medium hover:bg-amber-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#gallery" 
              className="block px-3 py-2 text-amber-900 font-medium hover:bg-amber-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Галерея
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 text-amber-900 font-medium hover:bg-amber-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </a>
            <a 
              href="#booking" 
              className="block px-3 py-2 bg-amber-700 text-white font-medium rounded-md hover:bg-amber-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Забронировать
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;