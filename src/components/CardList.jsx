import Card from './Card';

export default function CardList() {
  return (
    <div className="px-[5.2rem] max-lg:px-12 max-sm:px-3 pt-14 max-sm:pt-7 grid grid-cols-3 max-[1400px]:grid-cols-2 max-[1000px]:grid-cols-1  gap-y-[3.8rem] gap-x-6 max-sm:items-center max-sm:gap-y-6">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
