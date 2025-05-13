import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import SearchBar from "@/components/ui/SearchBar";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-100 flex items-center justify-center">
                <Icon name="Palette" size={24} className="text-primary" />
              </div>
              <span className="font-montserrat font-bold text-xl text-primary-900">
                ДетАрт
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={24} />
              </Button>

              <Button className="hidden md:flex" variant="outline">
                <Icon name="LogIn" size={18} className="mr-2" />
                Войти
              </Button>

              <Button className="hidden md:inline-flex">
                <Icon name="UserPlus" size={18} className="mr-2" />
                Регистрация
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <nav className="hidden md:flex items-center space-x-1">
              <Link to="/" className="nav-link active">
                Главная
              </Link>
              <Link to="/gallery" className="nav-link">
                Галерея
              </Link>
              <Link to="/lessons" className="nav-link">
                Уроки
              </Link>
              <Link to="/about" className="nav-link">
                О музее
              </Link>
            </nav>

            <SearchBar className="w-full md:w-auto md:max-w-sm lg:max-w-md" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
