import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-grow flex-col items-center justify-center gap-8 p-6">
      <div className="flex flex-col justify-center align-middle">
        <span className="text-center text-xl font-bold ">SEDE ANDINA</span>
        <h1 className="text-center text-9xl font-bold text-primary">AULA</h1>
        <span className="text-center text-xl">
          Administración Unificada de Lugares Académicos
        </span>
      </div>
      <Link href="/horarios">
        <Button
          variant="bordered"
          color="primary"
          size="lg"
          className="w-48 border-white text-white"
        >
          Ver horarios
        </Button>
      </Link>
    </main>
  );
}
