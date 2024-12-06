export default function Pagination() {
  return (
    <nav
      aria-label="Навигация по страницам"
      className="flex items-center justify-center gap-5 py-[3.25rem]"
    >
      <button
        className="bg-no-repeat bg-toBegin w-2 h-3.5"
        disabled
        aria-label="Предыдущая страница"
      ></button>

      <button className="bg-green rounded px-1.5 text-white font-normal text-xl leading-8">
        1
      </button>
      <button className="text-gray font-normal text-xl leading-8">2</button>
      <button className="text-gray font-normal text-xl leading-8">3</button>
      <button className="border border-green rounded px-1.5 text-gray font-normal text-xl leading-8">
        4
      </button>

      <span className="text-gray  font-normal text-xl leading-8">...</span>

      <button className="text-gray font-normal text-xl leading-8">11</button>

      <button className="bg-no-repeat bg-toEnd w-2 h-3.5" aria-label="Следующая страница"></button>
    </nav>
  );
}
