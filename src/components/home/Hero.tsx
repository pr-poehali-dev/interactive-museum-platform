
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Декоративные элементы */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-100 opacity-40 animate-float"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-accent-100 opacity-50"></div>
      <div className="absolute top-1/2 right-1/3 w-12 h-12 rounded-full bg-secondary-200 opacity-60 animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-4">
              Детское творчество <br />
              <span className="text-primary">в цифровом музее</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Платформа для юных художников, родителей и педагогов. 
              Делитесь творчеством, учитесь и вдохновляйтесь!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary" size="lg">
                <Icon name="Image" size={20} className="mr-2" />
                Галерея работ
              </Button>
              
              <Button variant="outline" size="lg" className="bg-white">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
            
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-primary-300 border-2 border-white flex items-center justify-center text-white">
                  <span className="text-xs font-medium">АК</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary-300 border-2 border-white flex items-center justify-center text-white">
                  <span className="text-xs font-medium">ПМ</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-accent-400 border-2 border-white flex items-center justify-center text-white">
                  <span className="text-xs font-medium">ДС</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary-200 border-2 border-white flex items-center justify-center text-primary-800">
                  <span className="text-xs font-medium">+50</span>
                </div>
              </div>
              <span className="text-gray-600">Присоединились сегодня</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-lg transform rotate-12 opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-lg transform -rotate-6 opacity-40"></div>
            
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-8 border-white animate-float">
              <img 
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80" 
                alt="Детский рисунок" 
                className="object-cover h-full w-full rounded-lg"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-montserrat font-bold text-xl">«Моя мечта»</h3>
                <p className="text-white/80 text-sm">Анна Иванова, 8 лет</p>
                <div className="flex items-center gap-2 mt-2">
                  <Icon name="Heart" size={16} className="text-red-400 fill-red-400" />
                  <span className="text-white/90 text-sm">128</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
