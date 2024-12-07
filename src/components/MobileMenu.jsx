import PropTypes from 'prop-types';
import NavigationsButtons from './NavigationsButtons';
import SocialMediaIcons from './SocialMediaIcons';
import TrainingAndResources from './TrainingAndResources';
import Platform from './Platform';
import { useEffect } from 'react';

export default function MobileMenu({ isOpenMenu, setIsOpenMenu }) {
  useEffect(() => {
    if (isOpenMenu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpenMenu]);

  return (
    <aside
      className={`fixed top-0 right-0 bottom-0 left-0 z-10 bg-black/30 transition-transform duration-300 ${
        isOpenMenu ? 'translate-x-0' : 'translate-x-full'
      }`}
      onClick={() => setIsOpenMenu(false)}
    >
      <div
        className="w-6/12 max-sm:w-full h-screen absolute top-0 right-0 bg-black flex flex-col items-center"
        onClick={e => e.stopPropagation()}
      >
        <button
          aria-label="Закрыть меню"
          type="button"
          className="bg-center bg-black bg-closeButton  w-[32px] h-[32px] self-end mt-[27px] mr-[27px] ml-0 "
          onClick={() => setIsOpenMenu(false)}
        ></button>
        <ul
          aria-label="навигация по продуктам сайта"
          className="flex flex-col items-center gap-2 max-sm:gap-1"
        >
          <TrainingAndResources />
        </ul>
        <ul
          aria-label="навигация по продуктам сайта"
          className="flex flex-col items-center gap-2 max-sm:gap-1 pt-3"
        >
          <Platform />
        </ul>
        <nav
          aria-label="навигация на форум, контакты и поиск"
          className="flex  items-center gap-5 lg:hidden  pt-[20vh]"
        >
          <NavigationsButtons />
        </nav>
        <div className="flex gap-[1.4rem] items-center sm:hidden pt-5">
          <SocialMediaIcons />
        </div>
      </div>
    </aside>
  );
}

MobileMenu.propTypes = {
  isOpenMenu: PropTypes.bool,
  setIsOpenMenu: PropTypes.func
};
