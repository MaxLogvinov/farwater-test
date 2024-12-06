import { Link } from 'react-router';
import Logo from './Logo';

export default function FooterTop() {
  return (
    <nav
      aria-label="панель навигации c детальной информацией о компании, логотипом, продуктами компании и контактами"
      className="w-full bg-black flex justify-center pt-[4.375rem] pb-[5.85rem] px-[5.2rem] max-lg:px-12 max-sm:px-5"
    >
      <div className="w-full max-w-[1440px]  flex justify-between">
        <ul className="flex flex-col gap-5">
          <li>
            <Logo width={216} height={36} />
          </li>
          <li>
            <h3 className="font-bold text-white text-lg w-72 pt-2">
              Платформа для автоматизации ваших процессов
            </h3>
          </li>
          <li>
            <Link
              aria-label="Скачать файл установки приложения для Desktop"
              download="тут должен быть прикреплен файл"
              to="/"
              className="bg-download bg-no-repeat w-40 h-12 inline-block"
            ></Link>
          </li>
          <li className="font-bold text-white text-lg w-72 leading-5">
            &copy; ООО «НПО «Фарватер» 2024
          </li>
        </ul>
        <div className="flex justify-between gap-[7.6rem]">
          <ul className="flex flex-col gap-4">
            <li>
              <h4 className="font-bold text-graytext text-2xl leading-7">Платформа</h4>
            </li>
            <li className="pt-3">
              <Link className="font-normal text-white text-lg leading-6">ElcoreStore</Link>
            </li>
            <li>
              <Link className="font-normal text-white text-lg leading-6">ElcoreCloud</Link>
            </li>
            <li>
              <Link className="font-normal text-white text-lg leading-6">ElcoreIDE</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li>
              <h4 className="font-bold text-graytext text-2xl leading-7">Обучение и ресурсы</h4>
            </li>
            <li className="pt-3">
              <Link className="font-normal text-white text-lg leading-6">Что такое ElcorePLC</Link>
            </li>
            <li>
              <Link className="font-normal text-white text-lg leading-6">Документация</Link>
            </li>
            <li>
              <Link className="font-normal text-white text-lg leading-6">Обучающие материалы</Link>
            </li>
            <li>
              <Link className="font-normal text-white text-lg leading-6">
                Примеры использования
              </Link>
            </li>
            <li>
              <Link className="font-normal text-white text-lg leading-6">База знаний</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li>
              <button
                type="button"
                aria-label="Кнопка перехода в личный кабинет"
                className="text-white font-bold text-lg leading-5 border rounded py-[0.8rem] px-4"
              >
                Личный кабинет
              </button>
            </li>
            <li className="pt-3">
              <Link className="font-normal text-white text-lg leading-6">Контакты</Link>
            </li>
            <li>
              <Link className="font-normal text-white text-lg leading-6">Новости и статьи</Link>
            </li>
            <li>
              <Link className="font-normal text-white text-lg leading-6">Сообщество (Форум)</Link>
            </li>
            <li>
              <Link className="font-normal text-white text-lg leading-6">Тех поддержка</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
