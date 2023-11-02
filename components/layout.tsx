import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({
  children,
  home,
}: {
  children: ReactNode;
  home?: boolean;
}) {
  return (
    <div>
      <Head>
        <title>Beer App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full bg-gradient-to-t from-yellow-400 to-white p-2 flex justify-between items-center">
        <h1 className="font-bold text-lg w-fit">Beer App</h1>
        {!home && (
          <Link className="text-blue-700" href={"/"}>
            🠔 Back to Home
          </Link>
        )}
      </header>

      <div>{children}</div>
    </div>
  );
}
