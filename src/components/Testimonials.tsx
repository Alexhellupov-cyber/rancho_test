import React from 'react';
import { Star } from "lucide-react";




const Testimonials = () => {
  const testimonials = [
    {
      name: 'Анна Петрова',
      text: 'Прекрасная прогулка! Лошади очень спокойные и дружелюбные, инструктор внимательный и профессиональный. Обязательно приедем еще раз!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Иван Сидоров',
      text: 'Отличный опыт для всей семьи. Дети были в восторге от общения с пони. Инструкторы очень терпеливые и внимательные к деталям.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Мария Иванова',
      text: 'Замечательная фотосессия с лошадьми! Получились потрясающие фотографии, а сама прогулка оставила незабываемые впечатления.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-amber-900 sm:text-4xl">
            Отзывы наших клиентов
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-amber-800">
            Что говорят о нас те, кто уже побывал на наших прогулках
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-amber-900">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-amber-800">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;