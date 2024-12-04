import MainNavigation from './MainNavigation';
import SecondaryNavigation from './SecondaryNavigation';

export default function Header() {
  return (
    <header className="w-full flex flex-col">
      <SecondaryNavigation />
      <MainNavigation />
    </header>
  );
}
