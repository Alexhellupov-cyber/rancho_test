import React from 'react';
import { Users as Horseshoe, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Horseshoe className="h-8 w-8 text-amber-300" />
              <span className="ml-2 text-xl font-bold text-white">Ранчо</span>
            </div>
            <p className="text-amber-200">
              Незабываемые конные прогулки в живописных местах для всей семьи. 
              Присоединяйтесь к нам для уникального опыта общения с лошадьми.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-300 mr-2 mt-0.5" />
                <span>Адрес: вулица Володимира Беца, 22, Київ</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-300 mr-2" />
                <span>+380 (XXX) XXX-XX-XX</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-300 mr-2" />
                <span>SOSAL@GMAIL.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-amber-200 hover:text-white transition">Индивидуальные прогулки</a></li>
              <li><a href="#services" className="text-amber-200 hover:text-white transition">Групповые прогулки</a></li>
              <li><a href="#services" className="text-amber-200 hover:text-white transition">Фотосессии с лошадьми</a></li>
              <li><a href="#services" className="text-amber-200 hover:text-white transition">Обучение верховой езде</a></li>
              <li><a href="#services" className="text-amber-200 hover:text-white transition">Конные походы</a></li>
              <li><a href="#services" className="text-amber-200 hover:text-white transition">Детские программы</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Режим работы</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Понедельник - Пятница:</span>
                <span>9:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Суббота - Воскресенье:</span>
                <span>8:00 - 20:00</span>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mt-6 mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-white transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-12 pt-8 text-center text-amber-300">
          <p>&copy; {new Date().getFullYear()} ЭквиТур. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;