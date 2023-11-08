import { listBeers } from '@/api';
import Layout from '@/components/layout';
import { IBeer } from '@/types/api';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface IHomeProps {
  beers?: IBeer[];
}

export const Home = ({ beers = [] }: IHomeProps) => {
  // TODO: implement pagination
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Layout home>
      <main className="p-6">
        <h1
          data-testid="title"
          className="text-5xl bg-white bg-opacity-75 w-fit p-4 rounded"
        >
          Beers
        </h1>
        <ul className="mt-4 flex flex-wrap gap-6">
          {beers.map((elem) => (
            <Link
              href={{
                pathname: '/beer/[id]',
                query: { id: elem.id },
              }}
              key={elem.id}
            >
              <li className="bg-white border-2 border-black rounded p-4 w-96 h-52 flex">
                <div className="flex flex-col flex-1 pr-3">
                  <h1 className="font-bold text-lg italic">{elem.name}</h1>
                  <p className="text-sm line-clamp-6">{elem.description}</p>
                </div>
                <div className="flex flex-2 items-center justify-center">
                  {!!elem.image_url && (
                    <Image
                      src={elem.image_url}
                      alt={elem.name || ''}
                      width={50}
                      height={50}
                      className="h-full object-scale-down"
                    />
                  )}
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const beers = await listBeers();
  return {
    props: {
      beers,
    },
  };
};

export default Home;
