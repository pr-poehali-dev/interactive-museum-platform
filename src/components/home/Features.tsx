
import React from 'react';
import Icon from '@/components/ui/icon';

const features = [
  {
    id: 1,
    title: 'Загрузка работ',
    description: 'Сохраните творческий путь ребенка, загружая его работы в цифровой музей',
    icon: 'Upload',
  },
  {
    id: 2,
    title: 'Образовательные ресурсы',
    description: 'Мастер-классы, видеоуроки и методические материалы для развития',
    icon: 'BookOpen',
  },
  {
    id: 3,
    title: 'Конкурсы и события',
    description: 'Участие в тематических выставках и творческих соревнованиях',
    icon: 'Award',
  },
  {
    id: 4,
    title: 'Поддержка сообщества',
    description: 'Общение с другими родителями, педагогами и юными художниками',
    icon: 'Users',
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary-800 mb-4">
            Возможности платформы
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Наш цифровой музей предлагает широкий спектр инструментов для 
            творческого развития детей, родителей и педагогов.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white border border-gray-100 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-primary-100"
            >
              <div className="mb-4 w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
                <Icon name={feature.icon} size={24} className="text-primary" />
              </div>
              
              <h3 className="font-montserrat font-semibold text-xl mb-3 text-primary-900">
                {feature.title}
              </h3>
              
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
