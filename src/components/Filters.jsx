import { NavLink } from 'react-router';

export default function Filters() {
  return (
    <nav>
      <ul className="flex gap-4 max-sm:gap-1">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm max-sm:text-xs leading-4 border border-green rounded-[20px] px-3.5 py-1.5 max-sm:px-3 max-sm:py-1 ${
                isActive ? 'bg-green text-white' : 'text-green'
              }`
            }
          >
            Все новости и статьи
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              `text-sm max-sm:text-xs leading-4 border border-green rounded-[20px] px-3.5 py-1.5 max-sm:px-3 max-sm:py-1 ${
                isActive ? 'bg-green text-white' : 'text-green'
              }`
            }
          >
            Новости
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles"
            className={({ isActive }) =>
              `text-sm max-sm:text-xs leading-4 border border-green rounded-[20px] px-3.5 py-1.5 max-sm:px-3 max-sm:py-1 ${
                isActive ? 'bg-green text-white' : 'text-green'
              }`
            }
          >
            Статьи
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
