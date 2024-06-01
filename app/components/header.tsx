import Link from 'next/link';
import LogoUNRN from './logoUNRN';
import NavLinks from './nav-links';
import ToggleTheme from './toggle-theme';
import { loggedUser } from './logged-user';
import SignoutButton from './dashboard/signout-button';

const Header = async () => {
  const user = await loggedUser();
  return (
    <header className="my-3 flex w-full items-center justify-between">
      <Link href="/" className="mx-3 px-3 py-4">
        <LogoUNRN className=" " />
      </Link>
      <div className="flex items-center gap-3">
        {user ? <SignoutButton /> : <NavLinks />}
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Header;
