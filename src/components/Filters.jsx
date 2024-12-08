import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Filters({ setFilter }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = filter => {
    setActiveFilter(filter);
    setFilter(filter);
  };

  return (
    <nav>
      <ul className="flex gap-4 max-sm:gap-1">
        <li>
          <button
            onClick={() => handleFilterChange('all')}
            className={`text-sm max-sm:text-xs leading-4 border border-green rounded-[20px] px-3.5 py-1.5 max-sm:px-3 max-sm:py-1 ${
              activeFilter === 'all' ? 'bg-green text-white' : 'text-green'
            }`}
          >
            Все новости и статьи
          </button>
        </li>
        <li>
          <button
            onClick={() => handleFilterChange('news')}
            className={`text-sm max-sm:text-xs leading-4 border border-green rounded-[20px] px-3.5 py-1.5 max-sm:px-3 max-sm:py-1 ${
              activeFilter === 'news' ? 'bg-green text-white' : 'text-green'
            }`}
          >
            Новости
          </button>
        </li>
        <li>
          <button
            onClick={() => handleFilterChange('article')}
            className={`text-sm max-sm:text-xs leading-4 border border-green rounded-[20px] px-3.5 py-1.5 max-sm:px-3 max-sm:py-1 ${
              activeFilter === 'article' ? 'bg-green text-white' : 'text-green'
            }`}
          >
            Статьи
          </button>
        </li>
      </ul>
    </nav>
  );
}
Filters.propTypes = {
  setFilter: PropTypes.func
};
