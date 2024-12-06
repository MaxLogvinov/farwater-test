import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center">
      <FooterTop />
      <FooterBottom />
    </footer>
  );
}
