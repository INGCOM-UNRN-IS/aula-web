import Link from 'next/link';
import LogoUNRN from './logoUNRN';
import NavLinks from './nav-links';

const Header = () => {
  return (
    <header className="my-3 flex w-full items-center justify-between">
      <Link href="/" className="mx-3 px-3 py-4">
        <LogoUNRN className=" " />
      </Link>
      <NavLinks />
    </header>
  );
};

export default Header;
