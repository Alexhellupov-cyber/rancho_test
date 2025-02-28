import React from 'react';
import { Users, Clock, Shield, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Индивидуальные прогулки',
      description: 'Персональная прогулка с инструктором, который подберет маршрут под ваши предпочтения и уровень подготовки.',
      icon: <Users className="h-8 w-8 text-amber-700" />,
      price: 'от 800грн/час'
    },
    {
      title: 'Групповые прогулки',
      description: 'Прогулки в компании до 6 человек по живописным маршрутам с опытным инструктором.',
      icon: <Users className="h-8 w-8 text-amber-700" />,
      price: 'от 1000грн/час'
    },
    {
      title: 'Фотосессии с лошадьми',
      description: 'Профессиональная фотосессия с нашими красивыми лошадьми в живописных локациях.',
      icon: <Clock className="h-8 w-8 text-amber-700" />,
      price: 'от 1000грн/час'
    },
    {
      title: 'Обучение верховой езде',
      description: 'Уроки верховой езды для начинающих и продолжающих под руководством опытных тренеров.',
      icon: <Shield className="h-8 w-8 text-amber-700" />,
      price: 'от 1000грн/час'
    },
    {
      title: 'Конные походы',
      description: 'Многочасовые и многодневные конные походы по живописным маршрутам с ночевкой в палатках.',
      icon: <MapPin className="h-8 w-8 text-amber-700" />,
      price: 'от 1000грн/день'
    },
    {
      title: 'Детские программы',
      description: 'Специальные программы для детей с пони и спокойными лошадьми под присмотром инструкторов.',
      icon: <Users className="h-8 w-8 text-amber-700" />,
      price: 'от 1000грн/30 мин'
    }
  ];

  return (
    <section id="services" className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-amber-900 sm:text-4xl">
            Наши услуги
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-amber-800">
            Выберите подходящий вариант для незабываемого опыта
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="p-6">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">{service.title}</h3>
                <p className="text-amber-800 mb-4">{service.description}</p>
                <div className="font-bold text-amber-700">{service.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;