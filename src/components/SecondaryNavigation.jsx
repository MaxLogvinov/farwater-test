import { Link } from 'react-router';
import SocialMediaIcons from './SocialMediaIcons';
import Star from '/src/assets/Star.svg';
import Cart from '/src/assets/shopping-cart.svg';

export default function SecondaryNavigation() {
  return (
    <section className="flex w-full  bg-gray px-[5.2rem] justify-between pt-3.5 pb-3">
      <div className="flex gap-5">
        <SocialMediaIcons />
      </div>
      <div className=" flex gap-14">
        <div className="flex gap-6">
          <Link className="text-whitetext font-bold text-base " to="/">
            Форум
          </Link>
          <Link className="text-whitetext font-bold text-base" to="/">
            Поиск
          </Link>
          <Link className="text-whitetext font-bold text-base" to="/">
            Контакты
          </Link>
        </div>
        <div className="flex gap-[1.9rem]">
          <Link to="/">
            <img
              src={Star}
              alt="инонка-ссылка израбнного"
              className="w-6 h-6"
              loading="lazy"
              width="24"
              height="24"
            />
          </Link>
          <Link to="/">
            <img
              src={Cart}
              alt="инонка-ссылка корзины для покупок"
              className="w-6 h-6"
              loading="lazy"
              width="24"
              height="24"
            />
          </Link>
          <button
            type="button"
            className="w-[8.7rem] h-[1.625rem] text-whitetext bg-green rounded text-sm "
          >
            Личный кабинет
          </button>
        </div>
      </div>
    </section>
  );
}
