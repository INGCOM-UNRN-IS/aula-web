import type { Metadata } from 'next';
import { ThemeProvider } from '@/context/theme-provider';
import { NextUIProviderContext } from '@/context/nextui-provider';
import './globals.css';
import localFont from 'next/font/local';

const fabrikat = localFont({
  src: [
    {
      path: '../assets/fonts/Fabrikat/black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Fabrikat/blackItalic.otf',
      weight: '900',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Fabrikat/bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Fabrikat/boldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Fabrikat/hairline.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Fabrikat/hairlineItalic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Fabrikat/light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Fabrikat/lightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Fabrikat/medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Fabrikat/mediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Fabrikat/regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Fabrikat/regularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Fabrikat/thin.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Fabrikat/thinItalic.otf',
      weight: '200',
      style: 'italic',
    },
  ],
  variable: '--font-fabrikat',
});

export const metadata: Metadata = {
  //metadataBase: new URL(''),
  title: {
    template: '%s | AULA',
    default: 'AULA',
  },
  description: 'Proyecto AULA de la materia Ingeniería de Software I UNRN',
  openGraph: {
    title: 'AULA',
    description: 'Proyecto AULA de la materia Ingeniería de Software I UNRN',
    //url: '',
    siteName: 'AULA',
    images: [
      {
        url: './opengraph-image.png',
        width: 1366,
        height: 768,
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${fabrikat.variable} font-fabrikat antialiased`}
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '0 auto',
        }}
      >
        <ThemeProvider>
          <NextUIProviderContext>{children}</NextUIProviderContext>
        </ThemeProvider>
      </body>
    </html>
  );
}
