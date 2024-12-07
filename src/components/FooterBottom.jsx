import SocialMediaIcons from './SocialMediaIcons';

export default function FooterBottom() {
  return (
    <nav
      aria-label="панель навигации c дополнительной информацией о компании и ссылками на социальные сети"
      className="w-full flex justify-center bg-gray  px-[5.2rem] max-lg:px-12 max-sm:px-5"
    >
      <ul className="w-full max-w-[1440px] flex  justify-between py-7 max-sm:py-3  max-sm:flex-col max-sm:items-center max-sm:gap-3">
        <li className="flex gap-[1.4rem] items-center">
          <SocialMediaIcons
            widthTg={24}
            heightTg={20}
            widthDz={20}
            heightDz={20}
            widthYt={22}
            heightYt={16}
            widthVk={20}
            heightVk={20}
          />
        </li>
        <li className="flex justify-beetween gap-6 max-sm:flex-col-reverse max-sm:items-center max-sm:gap-1">
          <p className="text-graysubtext font-normal text-base">Политика конфиденциальности</p>
          <p className="text-graysubtext font-normal text-base">Карта сайта</p>
        </li>
      </ul>
    </nav>
  );
}
