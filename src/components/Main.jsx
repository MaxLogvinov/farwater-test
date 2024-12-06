import Breadcrums from './Breadcrums';
import NewsAndArticles from './NewsAndArticles';

export default function Main() {
  return (
    <main className="w-full flex flex-col items-center bg-white">
      <Breadcrums />
      <NewsAndArticles />
    </main>
  );
}
