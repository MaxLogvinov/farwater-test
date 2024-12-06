import { Link } from 'react-router';
import TelegramIcon from '/src/assets/Тлг.svg';
import DzenIcon from '/src/assets/Дзен.svg';
import YoutubeIcon from '/src/assets/Ютуб.svg';
import VkIcon from '/src/assets/Вк.svg';
import PropTypes from 'prop-types';

export default function SocialMediaIcons({
  widthTg,
  heightTg,
  widthDz,
  heightDz,
  widthYt,
  heightYt,
  widthVk,
  heightVk
}) {
  return (
    <>
      <Link to="/">
        <img
          src={TelegramIcon}
          alt="инонка-ссылка Телеграм"
          loading="lazy"
          width={widthTg}
          height={heightTg}
        />
      </Link>
      <Link to="/">
        <img
          src={DzenIcon}
          alt="иконка-ссылка Дзен"
          loading="lazy"
          width={widthDz}
          height={heightDz}
        />
      </Link>
      <Link to="/">
        <img
          src={YoutubeIcon}
          alt="инонка-ссылка Ютуб"
          loading="lazy"
          width={widthYt}
          height={heightYt}
        />
      </Link>
      <Link to="/">
        <img src={VkIcon} alt="инонка-ссылка ВК" loading="lazy" width={widthVk} height={heightVk} />
      </Link>
    </>
  );
}

SocialMediaIcons.propTypes = {
  widthTg: PropTypes.number,
  heightTg: PropTypes.number,
  widthDz: PropTypes.number,
  heightDz: PropTypes.number,
  widthYt: PropTypes.number,
  heightYt: PropTypes.number,
  widthVk: PropTypes.number,
  heightVk: PropTypes.number
};
