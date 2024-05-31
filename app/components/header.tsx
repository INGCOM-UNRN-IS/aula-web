import Link from 'next/link';
import LogoUNRN from './logoUNRN';

const Header = () => {
  return (
    <header className="my-3 flex w-full items-center justify-between">
      <Link href="/" className="mx-3 px-3 py-4">
        <LogoUNRN className=" " />
      </Link>
      <nav className=" mx-4 flex flex-row gap-3">
        <Link href="/carreras" className="px-2 py-3">
          Carreras
        </Link>
        <Link href="/UNRN" className="px-2 py-3">
          UNRN
        </Link>
        <Link href="/accesibilidad" className="px-2 py-3">
          Accesibilidad
        </Link>
        <Link href="https://guarani.unrn.edu.ar/" className="px-2 py-3">
          SIU Guaraní
        </Link>
        <Link href="/contacto" className="px-2 py-3">
          Contacto
        </Link>
        <Link href="/ayuda" className="px-2 py-3">
          Ayuda
        </Link>
      </nav>
    </header>
  );
};

export default Header;
