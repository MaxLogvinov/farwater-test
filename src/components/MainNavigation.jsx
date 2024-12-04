import ElcoreProducts from './ElcoreProducts';
import Logo from './Logo';

export default function MainNavigation() {
  return (
    <section className="w-full bg-black flex">
      <Logo />
      <ElcoreProducts />
      <div className="bg-sandwich w-8 h-7  bg-no-repeat"></div>
    </section>
  );
}
