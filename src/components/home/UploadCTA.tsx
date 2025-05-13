
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const UploadCTA = () => {
  return (
    <section className="py-12 bg-primary-50 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute -top-16 right-10 w-32 h-32 rounded-full bg-primary-200 opacity-40"></div>
      <div className="absolute bottom-10 -left-16 w-48 h-48 rounded-full bg-accent-100 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary-900 mb-4">
              Поделитесь творчеством <br className="hidden md:block" />
              вашего ребенка
            </h2>
            
            <p className="text-gray-600 text-lg mb-6">
              Загрузите рисунки, поделки и другие творческие работы вашего ребенка, 
              чтобы сохранить их в цифровом музее и поделиться с сообществом.
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Icon name="CheckCircle" size={20} className="mr-2 mt-1 text-primary" />
                <span className="text-gray-700">Бесплатная загрузка до 20 работ в месяц</span>
              </li>
              <li className="flex items-start">
                <Icon name="CheckCircle" size={20} className="mr-2 mt-1 text-primary" />
                <span className="text-gray-700">Возможность участия в конкурсах и выставках</span>
              </li>
              <li className="flex items-start">
                <Icon name="CheckCircle" size={20} className="mr-2 mt-1 text-primary" />
                <span className="text-gray-700">Отзывы и поддержка от профессиональных педагогов</span>
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full hover:shadow-md transition-all">
                <Icon name="Upload" size={20} className="mr-2" />
                Добавить рисунок
              </Button>
              
              <Button variant="outline" size="lg" className="rounded-full">
                <Icon name="Info" size={20} className="mr-2" />
                Подробнее
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-2 relative">
            <div className="absolute -top-3 -left-3 w-full h-full bg-accent rounded-2xl transform -rotate-3 opacity-20"></div>
            <div className="absolute -bottom-3 -right-3 w-full h-full bg-primary rounded-2xl transform rotate-3 opacity-10"></div>
            
            <div className="relative bg-white p-5 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <Icon name="Upload" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Загрузка работы</h3>
                  <p className="text-gray-500 text-sm">Это просто и быстро</p>
                </div>
              </div>
              
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50">
                <Icon name="ImagePlus" size={48} className="text-gray-400 mb-3" />
                <p className="text-gray-600 text-center mb-2">Перетащите файлы или кликните для выбора</p>
                <p className="text-gray-400 text-xs text-center">Поддерживаются JPG, PNG, PDF до 10 МБ</p>
              </div>
              
              <div className="mt-4 flex gap-2">
                <Button variant="outline" className="w-full">Отмена</Button>
                <Button className="w-full">Загрузить</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadCTA;
