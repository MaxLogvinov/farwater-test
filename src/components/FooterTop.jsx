import { Link } from 'react-router';
import Logo from './Logo';
import Platform from './Platform';
import TrainingAndResources from './TrainingAndResources';

export default function FooterTop() {
  return (
    <nav
      aria-label="панель навигации c детальной информацией о компании, логотипом, продуктами компании и контактами"
      className="w-full bg-black flex justify-center pt-[4.375rem] pb-[5.85rem] max-sm:py-5 px-[5.2rem] max-lg:px-12 max-sm:px-5"
    >
      <div className="w-full max-w-[1440px] flex justify-between max-sm:justify-center">
        <ul className="flex flex-col max-sm:items-center gap-5 max-xl:gap-4">
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
        <div className="flex justify-between gap-[7.6rem] max-xl:gap-[4.6rem] max-[1070px]:gap-[3rem]">
          <ul className="flex flex-col gap-4 max-xl:gap-3 max-lg:hidden">
            <Platform />
          </ul>
          <ul className="flex flex-col gap-4 max-xl:gap-3 max-lg:hidden">
            <TrainingAndResources />
          </ul>
          <ul className="flex flex-col gap-4 max-xl:gap-3 max-sm:hidden">
            <li>
              <button
                type="button"
                aria-label="Кнопка перехода в личный кабинет"
                className="text-white font-bold text-lg max-xl:text-base leading-5 max-xl:leading-4 border rounded py-[0.8rem] px-4"
              >
                Личный кабинет
              </button>
            </li>
            <li className="pt-3">
              <Link className="font-normal text-white text-lg max-xl:text-base leading-6 max-xl:leading-5">
                Контакты
              </Link>
            </li>
            <li>
              <Link className="font-normal text-white text-lg max-xl:text-base leading-6 max-xl:leading-5">
                Новости и статьи
              </Link>
            </li>
            <li>
              <Link className="font-normal text-white text-lg max-xl:text-base leading-6 max-xl:leading-5">
                Сообщество (Форум)
              </Link>
            </li>
            <li>
              <Link className="font-normal text-white text-lg max-xl:text-base leading-6 max-xl:leading-5">
                Тех поддержка
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
