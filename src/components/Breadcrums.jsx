import { Link } from 'react-router';

export default function Breadcrums() {
  return (
    <nav
      aria-label="навигация по сайту"
      className="w-full pb-3 pt-1.5 pl-[5.2rem] max-sm:pl-5 bg-gray mt-[3.2rem] max-sm:mt-[2rem]"
    >
      <ol className="flex items-center">
        <li>
          <Link className="font-normal text-xs leading-5 text-whitelink" to="/">
            Главная
          </Link>
        </li>
        <li>
          <span className="px-3 font-normal text-xs leading-5  text-whitelink">&#47;</span>
        </li>
        <li>
          <Link className="font-normal text-xs leading-5 text-whitelink" to="/">
            Новости и статьи
          </Link>
        </li>
      </ol>
    </nav>
  );
}
