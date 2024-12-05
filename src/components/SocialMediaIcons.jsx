import { Link } from 'react-router';
import TelegramIcon from '/src/assets/Тлг.svg';
import DzenIcon from '/src/assets/Дзен.svg';
import YoutubeIcon from '/src/assets/Ютуб.svg';
import VkIcon from '/src/assets/Вк.svg';

export default function SocialMediaIcons() {
  return (
    <>
      <Link to="/">
        <img
          src={TelegramIcon}
          alt="инонка-ссылка Телеграм"
          className="w-[1.25rem] h-[1.0625rem]"
          loading="lazy"
          width="20"
          height="17"
        />
      </Link>
      <Link to="/">
        <img
          src={DzenIcon}
          alt="иконка-ссылка Дзен"
          className="w-[1.0625rem] h-[1.0625rem]"
          loading="lazy"
          width="17"
          height="17"
        />
      </Link>
      <Link to="/">
        <img
          src={YoutubeIcon}
          alt="инонка-ссылка Ютуб"
          className="w-[1.1875rem] h-[1rem]"
          loading="lazy"
          width="19"
          height="17"
        />
      </Link>
      <Link to="/">
        <img
          src={VkIcon}
          alt="инонка-ссылка ВК"
          className="w-[1.0625rem] h-[1.0625rem]"
          loading="lazy"
          width="17"
          height="17"
        />
      </Link>
    </>
  );
}
