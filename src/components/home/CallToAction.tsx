
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary-900 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-800 opacity-30"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-primary-800 opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6">
            Стань частью нашего творческого сообщества!
          </h2>
          
          <p className="text-primary-100 text-lg mb-8">
            Зарегистрируйтесь бесплатно и начните делиться творчеством вашего ребенка.
            Откройте мир возможностей для развития талантов!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-primary-900">
              <Icon name="UserPlus" size={20} className="mr-2" />
              Создать аккаунт
            </Button>
            
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-primary-800">
              <Icon name="Info" size={20} className="mr-2" />
              Узнать подробнее
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center">
            <div className="flex -space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=80" 
                alt="Пользователь" 
                className="w-10 h-10 rounded-full border-2 border-primary-800 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=80" 
                alt="Пользователь" 
                className="w-10 h-10 rounded-full border-2 border-primary-800 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=80" 
                alt="Пользователь" 
                className="w-10 h-10 rounded-full border-2 border-primary-800 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=80" 
                alt="Пользователь" 
                className="w-10 h-10 rounded-full border-2 border-primary-800 object-cover"
              />
              <div className="w-10 h-10 rounded-full bg-primary-700 border-2 border-primary-800 flex items-center justify-center text-white text-sm">
                +2K
              </div>
            </div>
            <span className="ml-4 text-primary-100">Уже с нами</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
