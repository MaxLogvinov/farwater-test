import { Link } from 'react-router';
import { useState } from 'react';

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative inline-block text-left max-xl:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex w-full justify-between rounded-lg bg-black text-white font-bold text-lg leading-5 pr-[1.3rem]  cursor-pointer  bg-dropdown-icon bg-no-repeat bg-right"
          type="button"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Обучение и ресурсы
        </button>

        {isOpen && (
          <ul
            className="absolute z-10 mt-2 w-56 rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <li role="none">
              <Link
                to="/"
                className="block px-4 py-2 text-white text-lg leading-5"
                role="menuitem"
                onClick={handleLinkClick}
              >
                Что такое ElcorePLC
              </Link>
            </li>
            <li role="none">
              <Link
                to="/"
                className="block px-4 py-2 text-white text-lg"
                role="menuitem"
                onClick={handleLinkClick}
              >
                Документация
              </Link>
            </li>
            <li role="none">
              <Link
                to="/"
                className="block px-4 py-2 text-white text-lg leading-5"
                role="menuitem"
                onClick={handleLinkClick}
              >
                Обучающие материалы
              </Link>
            </li>
            <li role="none">
              <Link
                to="/"
                className="block px-4 py-2 text-white text-lg leading-5"
                role="menuitem"
                onClick={handleLinkClick}
              >
                Примеры использования
              </Link>
            </li>
            <li role="none">
              <Link
                to="/"
                className="block px-4 py-2 text-white text-lg leading-5"
                role="menuitem"
                onClick={handleLinkClick}
              >
                База знаний
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
