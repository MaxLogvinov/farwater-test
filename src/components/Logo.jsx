import LogoIcon from '../assets/Лого.svg';
import { Link } from 'react-router';

export default function Logo() {
  return (
    <Link className="">
      <img src={LogoIcon} alt="логотип компании ElcorePLC" loading="lazy" width="192" height="33" />
    </Link>
  );
}
