import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Прогулка на лошадях в лесу'
    },
    {
      url: 'https://images.unsplash.com/photo-1551887196-9b6c26118711?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Лошадь на закате'
    },
    {
      url: 'https://images.unsplash.com/photo-1599053581540-248ea75b59c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Групповая прогулка на лошадях'
    },
    {
      url: 'https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Лошадь в поле'
    },
    {
      url: 'https://images.unsplash.com/photo-1566068256639-2f04bff55968?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Ребенок на пони'
    },
    {
      url: 'https://images.unsplash.com/photo-1527153818091-1a9638521e2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Конный поход в горах'
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-amber-900 sm:text-4xl">
            Галерея
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-amber-800">
            Моменты из наших прогулок и мероприятий
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;