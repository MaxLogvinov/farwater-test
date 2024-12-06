import LogoIcon from '../assets/Лого.svg';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

export default function Logo({ width, height }) {
  return (
    <Link className="">
      <img
        src={LogoIcon}
        aria-label=""
        alt="логотип компании ElcorePLC"
        loading="lazy"
        width={width}
        height={height}
      />
    </Link>
  );
}

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};
