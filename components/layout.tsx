import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import beerImg from '@/public/beer.png';

export default function Layout({
  children,
  home,
}: {
  children?: ReactNode;
  home?: boolean;
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${beerImg.src})`,
        backgroundSize: 200,
        backgroundPositionY: 50,
      }}
    >
      <Head>
        <title>Beer App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed w-full bg-gradient-to-t from-yellow-400 to-white p-2 flex justify-between items-center border-b-2 border-black">
        <h1 data-testid={'header-title'} className="font-bold text-lg w-fit">
          Beer App
        </h1>
        {!home && (
          <Link data-testid="header-back" className="text-blue-700" href={'/'}>
            🠔 Back to Home
          </Link>
        )}
      </header>

      <main className="pt-10 flex min-h-screen">{children}</main>
    </div>
  );
}
