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
          className="w-5 h-5"
          loading="lazy"
          width="20"
          height="20"
        />
      </Link>
      <Link to="/">
        <img
          src={DzenIcon}
          alt="иконка-ссылка Дзен"
          className="w-5 h-5"
          loading="lazy"
          width="20"
          height="20"
        />
      </Link>
      <Link to="/">
        <img
          src={YoutubeIcon}
          alt="инонка-ссылка Ютуб"
          className="w-5 h-5"
          loading="lazy"
          width="20"
          height="20"
        />
      </Link>
      <Link to="/">
        <img
          src={VkIcon}
          alt="инонка-ссылка ВК"
          className="w-5 h-5"
          loading="lazy"
          width="20"
          height="20"
        />
      </Link>
    </>
  );
}
