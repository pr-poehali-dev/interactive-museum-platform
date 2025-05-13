
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

// Массив с данными работ
const artworks = [
  {
    id: 1,
    title: 'Космическое путешествие',
    author: 'Миша Петров',
    age: 7,
    likes: 86,
    image: 'https://images.unsplash.com/photo-1534488972407-5a4aa1e47a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 2,
    title: 'Лето в деревне',
    author: 'Катя Сидорова',
    age: 9,
    likes: 124,
    image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 3,
    title: 'Мой питомец',
    author: 'Андрей Козлов',
    age: 6,
    likes: 95,
    image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 4,
    title: 'Сказочный замок',
    author: 'Лена Иванова',
    age: 8,
    likes: 142,
    image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 5,
    title: 'Волшебный лес',
    author: 'Даниил Соколов',
    age: 10,
    likes: 78,
    image: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 6,
    title: 'Морские приключения',
    author: 'Полина Смирнова',
    age: 9,
    likes: 103,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
  },
];

const FeaturedWorks = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary-800 mb-4">
            Работы юных художников
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Познакомьтесь с творчеством наших талантливых участников. 
            Каждая работа уникальна и наполнена детской фантазией.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="art-card group animate-expand">
              <img 
                src={artwork.image} 
                alt={artwork.title} 
                className="w-full h-72 object-cover rounded-xl"
              />
              <div className="art-overlay">
                <h3 className="text-white font-montserrat font-semibold text-xl">{artwork.title}</h3>
                <p className="text-white/80">
                  {artwork.author}, {artwork.age} лет
                </p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/20 text-white hover:bg-white/30">
                      <Icon name="Heart" size={16} />
                    </Button>
                    <span className="text-white/90">{artwork.likes}</span>
                  </div>
                  
                  <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/20 text-white hover:bg-white/30">
                    <Icon name="Share2" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-white hover:bg-gray-50 text-primary hover:text-primary-700 border border-primary-100">
            <Icon name="GridIcon" size={18} className="mr-2" />
            Показать больше работ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
