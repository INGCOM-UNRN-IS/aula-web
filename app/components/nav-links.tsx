'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Switch } from '@nextui-org/react';
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import ThemeContext from '@/context/theme-context';
import { useContext } from 'react';

const links = [
  { href: '/carreras', label: 'Carreras' },
  { href: '/UNRN', label: 'UNRN' },
  { href: '/accesibilidad', label: 'Accesibilidad' },
  { href: 'https://guarani.unrn.edu.ar/', label: 'SIU Guaraní' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/ayuda', label: 'Ayuda' },
];

export default function NavLinks() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className=" hover:text-pr mx-4 flex flex-row gap-3">
      {links.map(({ href, label }) => (
        <Link
          key={`${href}${label}`}
          href={href}
          className={clsx(
            'px-2 py-3 transition-colors duration-150 ease-in-out hover:text-primary',
            {
              'text-primary': pathname === href,
            },
          )}
        >
          {label}
        </Link>
      ))}
      <Switch
        isSelected={theme === 'light'}
        size="lg"
        color="primary"
        onClick={toggleTheme}
        thumbIcon={theme === 'dark' ? <MoonIcon /> : <SunIcon />}
      ></Switch>
    </nav>
  );
}
