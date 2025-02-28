import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-amber-900 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1450052590821-8bf91254a353?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Лошади на природе" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Незабываемые прогулки на лошадях
        </h1>
        <p className="mt-6 text-xl text-amber-100 max-w-3xl">
          Откройте для себя красоту природы с нашими дружелюбными лошадьми. 
          Мы предлагаем конные прогулки для всех уровней подготовки в живописных местах.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#booking"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-amber-900 bg-white hover:bg-amber-50 transition"
          >
            Забронировать прогулку
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-amber-800 hover:bg-opacity-30 transition"
          >
            Узнать больше
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;