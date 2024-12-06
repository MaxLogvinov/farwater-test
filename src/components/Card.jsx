import picture from '../assets/Изображение.svg';

export default function Card() {
  return (
    <figure className="w-[26.75rem] max-sm:w-[20.865rem] flex flex-col max-sm:items-center">
      <img
        src={picture}
        alt="инонка-ссылка Телеграм"
        className="w-[25.5rem] h-[13.75rem] max-sm:w-[19.865rem] max-sm:h-[10.725rem]"
        loading="lazy"
        width="408"
        height="220"
      />
      <figcaption className="flex flex-col pt-3 gap-2 max-sm:items-center max-sm:gap-1">
        <p className="font-normal text-sm text-graytext">
          <span>12 июля 2024</span>
          <span className="px-2.5">&#47;</span>
          <span>Новость</span>
        </p>
        <h3 className="text-gray text-2xl font-bold leading-10 max-sm:w-11/12 max-sm:text-1xl max-sm:leading-8">
          Новые технологии в сфере автоматизации
        </h3>
        <p className="text-gray font-normal text-base  leading-[1.6rem] w-11/12   max-sm:text-sm  max-sm:leading-[1.4rem]">
          Какие инновации помогут улучшить производственные процессы и повысить эффективность работы
          предприятий
        </p>
      </figcaption>
    </figure>
  );
}
