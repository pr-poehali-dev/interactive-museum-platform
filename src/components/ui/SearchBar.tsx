
import React, { useState } from 'react';
import { Input } from './input';
import { Button } from './button';
import Icon from './icon';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
}

const SearchBar = ({ 
  placeholder = "Поиск работ, мастер-классов и материалов...", 
  className = "",
  onSearch = () => {} 
}: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={`relative flex w-full max-w-2xl ${className}`}>
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pr-10 bg-white/90 backdrop-blur-sm border-primary-100 focus-visible:ring-primary/30"
      />
      <Button 
        type="submit" 
        variant="ghost" 
        size="icon" 
        className="absolute right-0 top-0 h-full text-primary hover:text-primary-700"
      >
        <Icon name="Search" size={18} />
        <span className="sr-only">Искать</span>
      </Button>
    </form>
  );
};

export default SearchBar;
