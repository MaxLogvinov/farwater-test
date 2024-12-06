import ElcoreProducts from './ElcoreProducts';
import Logo from './Logo';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function MainNavigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <section className="w-full bg-black flex justify-center">
        <div className="w-full max-w-[1440px] flex items-center justify-between px-[5.2rem] max-lg:px-12 max-sm:px-5 py-9 max-sm:py-5">
          <Logo width={192} height={33} />
          <nav
            aria-label="навигация по продуктам сайта"
            className="flex gap-10 items-center max-xl:hidden"
          >
            <ElcoreProducts />
          </nav>
          <button
            aria-label="Открыть меню"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            type="button"
            className="bg-sandwich w-8 h-7  bg-no-repeat cursor-pointer"
          ></button>
        </div>
      </section>
      {isOpenMenu && <MobileMenu isOpen={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />}
    </>
  );
}
