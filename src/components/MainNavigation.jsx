import ElcoreProducts from './ElcoreProducts';
import Logo from './Logo';
import { useState } from 'react';

export default function MainNavigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <section className="w-full bg-black flex items-center justify-between px-[5.2rem] py-9 ">
      <Logo />
      <ElcoreProducts />
      <button type="button" className="bg-sandwich w-8 h-7  bg-no-repeat"></button>
    </section>
  );
}
