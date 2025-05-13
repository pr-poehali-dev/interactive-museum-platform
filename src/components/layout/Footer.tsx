
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary-50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-primary-100 flex items-center justify-center">
                <Icon name="Palette" size={20} className="text-primary" />
              </div>
              <span className="font-montserrat font-bold text-lg text-primary-900">ДетАрт</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Интерактивная платформа детского художественного творчества
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-primary-700 transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-primary hover:text-primary-700 transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-primary hover:text-primary-700 transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="text-primary hover:text-primary-700 transition-colors">
                <Icon name="Telegram" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/gallery" className="text-gray-600 hover:text-primary transition-colors">Галерея работ</Link></li>
              <li><Link to="/lessons" className="text-gray-600 hover:text-primary transition-colors">Уроки и мастер-классы</Link></li>
              <li><Link to="/competitions" className="text-gray-600 hover:text-primary transition-colors">Конкурсы</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">О музее</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Для родителей</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-600 hover:text-primary transition-colors">Часто задаваемые вопросы</Link></li>
              <li><Link to="/upload" className="text-gray-600 hover:text-primary transition-colors">Загрузить работу ребенка</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-primary transition-colors">Методические материалы</Link></li>
              <li><Link to="/safety" className="text-gray-600 hover:text-primary transition-colors">Правила безопасности</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="Mail" size={18} className="mr-2 mt-1 text-primary" />
                <span className="text-gray-600">info@detart.ru</span>
              </li>
              <li className="flex items-start">
                <Icon name="Phone" size={18} className="mr-2 mt-1 text-primary" />
                <span className="text-gray-600">+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-start">
                <Icon name="MapPin" size={18} className="mr-2 mt-1 text-primary" />
                <span className="text-gray-600">Москва, ул. Художественная, д. 123</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} ДетАрт — Детский художественный музей. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
