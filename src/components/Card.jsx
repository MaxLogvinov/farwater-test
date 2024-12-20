import picture from '../assets/Изображение.svg';
import PropTypes from 'prop-types';

export default function Card({ name, type, description, time }) {
  return (
    <figure className="w-[26.75rem] max-sm:w-[20.865rem] flex flex-col max-sm:items-center">
      <img
        src={picture}
        alt={name}
        className="w-[25.5rem] h-[13.75rem] max-sm:w-[19.865rem] max-sm:h-[10.725rem]"
        loading="lazy"
        width="408"
        height="220"
      />
      <figcaption className="flex flex-col pt-3 gap-2 max-sm:items-center max-sm:gap-1">
        <p className="font-normal text-sm text-graytext">
          {time && <span>{time}</span>}
          {time && <span className="px-2.5">&#47;</span>}
          <span>{type === 'news' ? 'Новость' : 'Статья'}</span>
        </p>
        <h3 className="text-gray text-2xl font-bold leading-10 max-sm:w-11/12 max-sm:text-1xl max-sm:leading-8">
          {name}
        </h3>
        <p className="text-gray font-normal text-base  leading-[1.6rem] w-11/12   max-sm:text-sm  max-sm:leading-[1.4rem]">
          {description}
        </p>
      </figcaption>
    </figure>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  time: PropTypes.string
};
