import { Link } from 'react-router';

export default function Platform() {
  return (
    <>
      <li>
        <h4 className="font-bold text-graytext text-2xl max-xl:text-xl leading-7 max-xl:leading-6">
          Платформа
        </h4>
      </li>
      <li className="pt-3 max-sm:pt-0">
        <Link className="font-normal text-white text-lg max-xl:text-base leading-6 max-xl:leading-5">
          ElcoreStore
        </Link>
      </li>
      <li>
        <Link className="font-normal text-white text-lg max-xl:text-base leading-6 max-xl:leading-5">
          ElcoreCloud
        </Link>
      </li>
      <li>
        <Link className="font-normal text-white text-lg max-xl:text-base leading-6 max-xl:leading-5">
          ElcoreIDE
        </Link>
      </li>
    </>
  );
}
