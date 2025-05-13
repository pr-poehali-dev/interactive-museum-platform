
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const newsAndContests = [
  {
    id: 1,
    type: 'contest',
    title: 'Всероссийский конкурс "Природа глазами детей"',
    date: '20 мая — 15 июня 2025',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    description: 'Приглашаем детей в возрасте от 5 до 14 лет представить свое видение природы родного края.',
    ageGroup: '5-14 лет',
  },
  {
    id: 2,
    type: 'news',
    title: 'Открытие виртуальной выставки "Мой космос"',
    date: '12 апреля 2025',
    image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    description: 'Ко Дню космонавтики мы подготовили специальную выставку работ на тему космоса.',
  },
  {
    id: 3,
    type: 'contest',
    title: 'Международный конкурс детского рисунка "Краски дружбы"',
    date: '1 июня — 30 августа 2025',
    image: 'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    description: 'Конкурс посвящен теме дружбы народов и культурного многообразия.',
    ageGroup: '7-16 лет',
  },
  {
    id: 4,
    type: 'news',
    title: 'Серия мастер-классов "Основы акварельной живописи"',
    date: 'Каждую субботу с 10 июня',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    description: 'Приглашаем на онлайн-уроки по акварельной живописи для детей от 8 лет и их родителей.',
  },
];

const NewsAndContests = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
          <div>
            <h2 className="font-montserrat font-bold text-3xl text-primary-800">
              Новости и конкурсы
            </h2>
            <p className="text-gray-600 mt-2">
              Актуальные события и возможности для участия
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="border-gray-200 text-gray-700 hover:text-primary hover:border-primary">
              Все новости
            </Button>
            <Button variant="outline" className="border-gray-200 text-gray-700 hover:text-primary hover:border-primary">
              Все конкурсы
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsAndContests.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <Badge 
                  className={`absolute top-3 left-3 
                    ${item.type === 'contest' ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'}`}
                >
                  {item.type === 'contest' ? 'Конкурс' : 'Новость'}
                </Badge>
              </div>
              
              <CardHeader className="pt-4 pb-0">
                <CardTitle className="text-lg font-semibold line-clamp-2">{item.title}</CardTitle>
                <CardDescription className="flex items-center text-sm">
                  <Icon name="Calendar" size={14} className="mr-1" />
                  {item.date}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-2">
                <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
                {item.ageGroup && (
                  <Badge variant="outline" className="mt-2 bg-primary-50 text-primary-700 hover:bg-primary-100">
                    {item.ageGroup}
                  </Badge>
                )}
              </CardContent>
              
              <CardFooter className="pt-0">
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary-700 hover:bg-transparent">
                  Подробнее
                  <Icon name="ChevronRight" size={16} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndContests;
