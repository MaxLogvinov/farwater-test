import LogoIcon from '../assets/Лого.svg';

export default function Logo() {
  return (
    <a className="">
      <img
        src={LogoIcon}
        alt="логотип компании ElcorePLC"
        className=""
        loading="lazy"
        width="192"
        height="33"
      />
    </a>
  );
}
