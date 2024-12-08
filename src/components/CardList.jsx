import Card from './Card';
import PropTypes from 'prop-types';

export default function CardList({ data }) {
  return (
    <div className="px-[5.2rem] max-lg:px-12 max-sm:px-3 pt-[3.2rem] max-sm:pt-7 grid grid-cols-3 max-[1400px]:grid-cols-2 max-[1000px]:grid-cols-1  gap-y-[3.8rem] gap-x-6 max-sm:items-center max-sm:gap-y-6">
      {data.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}

CardList.propTypes = {
  data: PropTypes.array
};
