
import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const categories = [
  {
    id: 1,
    name: 'Живопись',
    icon: 'Palette',
    description: 'Рисунки акварелью, гуашью и другими красками',
    color: 'bg-primary-100',
    textColor: 'text-primary-700',
    iconColor: 'text-primary',
  },
  {
    id: 2,
    name: 'Графика',
    icon: 'PenTool',
    description: 'Карандашные рисунки, тушь, линеры',
    color: 'bg-secondary-100',
    textColor: 'text-secondary-700',
    iconColor: 'text-secondary',
  },
  {
    id: 3,
    name: 'Аппликация',
    icon: 'Scissors',
    description: 'Работы из цветной бумаги и других материалов',
    color: 'bg-accent-100',
    textColor: 'text-accent-700',
    iconColor: 'text-accent-700',
  },
  {
    id: 4,
    name: 'Скульптура',
    icon: 'Cube',
    description: 'Лепка из пластилина, глины и других материалов',
    color: 'bg-primary-50',
    textColor: 'text-primary-700',
    iconColor: 'text-primary',
  },
];

const Categories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary-800 mb-4">
            Исследуйте по категориям
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            В нашем музее представлены работы в различных техниках. 
            Выберите интересующее направление.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className={`rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${category.color}`}
            >
              <div className="mb-4 w-12 h-12 rounded-lg flex items-center justify-center bg-white">
                <Icon name={category.icon} size={24} className={category.iconColor} />
              </div>
              
              <h3 className={`font-montserrat font-semibold text-xl mb-2 ${category.textColor}`}>
                {category.name}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {category.description}
              </p>
              
              <Button variant="ghost" className={`p-0 ${category.textColor} hover:bg-transparent hover:underline`}>
                Показать работы 
                <Icon name="ChevronRight" size={16} className="ml-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
