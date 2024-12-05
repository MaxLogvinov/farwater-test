import { Link } from 'react-router';

export default function NavigationsButtons() {
  return (
    <>
      <Link className="text-whitetext font-bold text-base text-[0.9375rem]" to="/">
        Форум
      </Link>
      <Link className="text-whitetext font-bold text-base text-[0.9375rem]" to="/">
        Поиск
      </Link>
      <Link className="text-whitetext font-bold text-base text-[0.9375rem]" to="/">
        Контакты
      </Link>
    </>
  );
}
