import { Link } from 'react-router';
import DropdownMenu from './DropdownMenu';

export default function ElcoreProducts() {
  return (
    <>
      <Link className="text-white font-bold text-lg leading-5" to="/">
        ElcoreStore
      </Link>
      <Link className="text-white font-bold text-lg leading-5" to="/">
        ElcoreCloud
      </Link>
      <Link className="text-white font-bold text-lg leading-5" to="/">
        ElcoreIDE
      </Link>
      <DropdownMenu />
      <Link className="text-white font-bold text-lg leading-5 xl:hidden" to="/">
        Обучение и ресурсы
      </Link>
      <Link className="text-white font-bold text-lg leading-5" to="/">
        Новости и&nbsp;статьи
      </Link>
    </>
  );
}
