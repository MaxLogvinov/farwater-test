import { Link } from 'react-router';

export default function ElcoreProducts() {
  return (
    <div className="flex">
      <Link className="text-white font-bold text-lg leading-5" to="/">
        ElcoreStore
      </Link>
      <Link className="text-white font-bold text-lg leading-5" to="/">
        ElcoreCloud
      </Link>
      <Link className="text-white font-bold text-lg leading-5" to="/">
        ElcoreIDE
      </Link>
      <select
        className=" bg-black text-white font-bold text-lg leading-5 bg-dropdown-icon bg-no-repeat bg-right appearance-none cursor-pointer"
        style={{ backgroundPositionX: 'calc(100% - 4px)' }}
      >
        <option className="text-white font-bold text-lg leading-5">
          Обучение и&nbsp;ресурсы&nbsp;&nbsp;&nbsp;&nbsp;
        </option>
        <option className="text-white font-bold text-lg leading-5">Что такое ElcorePLC</option>
      </select>
      <Link className="text-white font-bold text-lg leading-5" to="/">
        Новости и&nbsp;статьи
      </Link>
    </div>
  );
}
