import CardList from './CardList';
import Filters from './Filters';
import Pagination from './Pagination';

export default function NewsAndArticles() {
  return (
    <section className="w-full flex flex-col items-center justify-center ">
      <h1 className="font-bold py-14 max-sm:py-7 text-4xl">Новости и статьи</h1>
      <Filters />
      <CardList />
      <Pagination />
    </section>
  );
}
