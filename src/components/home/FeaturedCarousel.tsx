
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Массив с данными лучших работ
const featuredWorks = [
  {
    id: 1,
    title: 'Волшебный лес',
    author: 'Анна Смирнова',
    age: 8,
    technique: 'Акварель',
    likes: 124,
    featured: true,
    image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 2,
    title: 'Космическое путешествие',
    author: 'Максим Петров',
    age: 10,
    technique: 'Гуашь',
    likes: 156,
    featured: true,
    image: 'https://images.unsplash.com/photo-1534488972407-5a4aa1e47a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 3,
    title: 'Сказочный замок',
    author: 'Софья Иванова',
    age: 9,
    technique: 'Смешанная техника',
    likes: 98,
    featured: true,
    image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 4,
    title: 'Морские приключения',
    author: 'Артём Козлов',
    age: 7,
    technique: 'Цветные карандаши',
    likes: 112,
    featured: true,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 5,
    title: 'Мой питомец',
    author: 'Дарья Соловьева',
    age: 6,
    technique: 'Пастель',
    likes: 87,
    featured: true,
    image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
  }
];

const FeaturedCarousel = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="font-montserrat font-bold text-3xl text-primary-800">
              Лучшие работы
            </h2>
            <p className="text-gray-600 mt-2">
              Познакомьтесь с выдающимися работами наших юных художников
            </p>
          </div>
          
          <Button variant="outline" className="hidden md:flex">
            <Icon name="Grid" size={18} className="mr-2" />
            Все работы
          </Button>
        </div>
        
        <div className="relative">
          <Carousel className="w-full overflow-hidden" opts={{ loop: true }}>
            <CarouselContent className="-ml-4">
              {featuredWorks.map((work) => (
                <CarouselItem key={work.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="relative group rounded-xl overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                    <AspectRatio ratio={4/3}>
                      <img 
                        src={work.image} 
                        alt={work.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </AspectRatio>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-montserrat font-semibold text-xl mb-1">{work.title}</h3>
                        <p className="text-white/80 text-sm">
                          {work.author}, {work.age} лет • {work.technique}
                        </p>
                        
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/10 text-white hover:bg-white/20">
                              <Icon name="Heart" size={16} />
                            </Button>
                            <span className="text-white/90">{work.likes}</span>
                          </div>
                          
                          <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/10 text-white hover:bg-white/20">
                            <Icon name="ZoomIn" size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Бейдж "Избранное" */}
                    <div className="absolute top-3 right-3 bg-primary/90 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      Избранное
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-2 lg:-left-12 bg-white/80 backdrop-blur-sm" />
            <CarouselNext className="right-2 lg:-right-12 bg-white/80 backdrop-blur-sm" />
          </Carousel>
        </div>
        
        <div className="mt-8 text-center">
          <Button className="md:hidden">
            <Icon name="Grid" size={18} className="mr-2" />
            Все работы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
