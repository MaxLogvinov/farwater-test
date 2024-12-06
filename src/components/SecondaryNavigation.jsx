import { Link } from 'react-router';
import SocialMediaIcons from './SocialMediaIcons';
import Star from '/src/assets/Star.svg';
import Cart from '/src/assets/shopping-cart.svg';
import NavigationsButtons from './NavigationsButtons';

export default function SecondaryNavigation() {
  return (
    <section className="flex w-full  bg-gray justify-center">
      <div className="flex w-full max-w-[1440px] px-[5.2rem] max-lg:px-12 max-sm:px-5 justify-between max-sm:justify-center pt-3.5 pb-3">
        <div className="flex gap-[1.4rem] items-center max-sm:hidden">
          <SocialMediaIcons />
        </div>
        <div className=" flex gap-14 ">
          <nav
            aria-label="навигация на форум, контакты и поиск"
            className="flex gap-[1.7rem] max-lg:hidden"
          >
            <NavigationsButtons />
          </nav>
          <nav
            aria-label="навигация в избранное,корзину покупок и личный кабинет"
            className="flex gap-[1.8rem] "
          >
            <Link to="/">
              <img
                aria-label="перейти в избранное"
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
                aria-label="Перейти в корзину покупок"
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
          </nav>
        </div>
      </div>
    </section>
  );
}
