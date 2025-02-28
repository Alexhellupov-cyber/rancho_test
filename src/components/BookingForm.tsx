import React, { useState } from 'react';
import { Calendar, Users, Clock } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    participants: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      service: '',
      participants: '',
      message: ''
    });
  };

  return (
    <section id="booking" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-amber-900 sm:text-4xl">
            Забронировать прогулку
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-amber-800">
            Заполните форму, и мы свяжемся с вами для подтверждения
          </p>
        </div>

        <div className="bg-amber-50 rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-amber-900">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border-amber-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-amber-900">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border-amber-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-amber-900">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full border-amber-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-amber-900">
                        Дата *
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar className="h-5 w-5 text-amber-500" />
                        </div>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="pl-10 block w-full border-amber-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-amber-900">
                        Время *
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Clock className="h-5 w-5 text-amber-500" />
                        </div>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="pl-10 block w-full border-amber-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-amber-900">
                      Услуга *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border-amber-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                    >
                      <option value="">Выберите услугу</option>
                      <option value="individual">Индивидуальная прогулка</option>
                      <option value="group">Групповая прогулка</option>
                      <option value="photoshoot">Фотосессия с лошадьми</option>
                      <option value="training">Обучение верховой езде</option>
                      <option value="trek">Конный поход</option>
                      <option value="children">Детская программа</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="participants" className="block text-sm font-medium text-amber-900">
                      Количество участников *
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Users className="h-5 w-5 text-amber-500" />
                      </div>
                      <input
                        type="number"
                        id="participants"
                        name="participants"
                        min="1"
                        value={formData.participants}
                        onChange={handleChange}
                        required
                        className="pl-10 block w-full border-amber-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-amber-900">
                      Дополнительная информация
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full border-amber-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Укажите ваши пожелания, опыт верховой езды и другую важную информацию"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-amber-700 text-white py-3 px-6 rounded-md hover:bg-amber-800 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                    >
                      Отправить заявку
                    </button>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="md:w-1/2 bg-amber-800 p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Информация о бронировании</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Как это работает</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Заполните форму бронирования</li>
                    <li>Мы свяжемся с вами для подтверждения деталей</li>
                    <li>Внесите предоплату для гарантированного бронирования</li>
                    <li>Приезжайте в назначенное время и наслаждайтесь прогулкой</li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Важная информация</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Приезжайте за 15 минут до начала прогулки</li>
                    <li>Одевайтесь по погоде, рекомендуем удобную обувь</li>
                    <li>Шлемы предоставляются бесплатно</li>
                    <li>Дети до 14 лет только в сопровождении взрослых</li>
                    <li>При отмене менее чем за 24 часа взимается штраф</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Контакты</h4>
                  <p>Телефон: +380 (XXX) XXX-XX-XX</p>
                  <p>Email: info@gmail.com</p>
                  <p>Адрес: вулица Володимира Беца, 22, Київ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;