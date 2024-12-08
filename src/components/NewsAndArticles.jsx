import CardList from './CardList';
import Filters from './Filters';
import Pagination from './Pagination';
import { useState } from 'react';
import { data } from '../utils/data.js';

export default function NewsAndArticles() {
  const [filter, setFilter] = useState('all');

  const filteredData = data.filter(item => filter === 'all' || item.type === filter);

  return (
    <section className="w-full flex flex-col items-center justify-center ">
      <h1 className="font-bold py-14 max-sm:py-7 text-4xl">Новости и статьи</h1>
      <Filters setFilter={setFilter} />
      <CardList data={filteredData} />
      <Pagination />
    </section>
  );
}
