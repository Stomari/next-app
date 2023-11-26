import { listBeers } from '@/api';
import Layout from '@/components/layout';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchBeersByPage } from '@/redux/beer/actions';
import { setBeersList } from '@/redux/beer/beerSlice';
import { IBeer } from '@/types/api';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface IHomeProps {
  beers?: IBeer[];
}

export const Home = ({ beers = [] }: IHomeProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useAppDispatch();
  const { beerList } = useAppSelector((state) => state.beerReducer);

  // Set first beer page from static props
  useEffect(() => {
    dispatch(setBeersList({ page: currentPage, beerList: beers }));
  }, []);

  const setNextPage = () => {
    // API doesn't tell how many pages there are
    // this line prevents unnecessary requests
    if (
      beerList[currentPage] !== undefined &&
      beerList[currentPage]!.length < 25
    )
      return;

    const nextPage = currentPage + 1;

    if (!beerList[nextPage]) {
      dispatch(fetchBeersByPage(nextPage));
    }

    setCurrentPage(nextPage);
  };

  const setPrevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <Layout home>
      <main className="p-6 w-full">
        <div className="flex">
          <h1
            data-testid="title"
            className="text-5xl bg-white bg-opacity-75 w-fit p-4 rounded"
          >
            Beers
          </h1>

          {/* Pagination */}
          <div className="flex flex-1 justify-center">
            <div className="flex flex-col items-center justify-center bg-white bg-opacity-75 w-fit p-4 rounded">
              <span className="text-sm ">
                Showing <span className="font-semibold">1</span> to{' '}
                <span className="font-semibold">25</span> Entries
              </span>

              <div className="inline-flex mt-2 xs:mt-0">
                <button
                  onClick={setPrevPage}
                  className="flex items-center justify-center px-3 h-8 text-sm font-medium text-black  bg-yellow-400 rounded-s hover:bg-yellow-500    "
                >
                  Prev
                </button>
                <button
                  onClick={setNextPage}
                  className="flex items-center justify-center px-3 h-8 text-sm font-medium  bg-yellow-400 border-0 border-s border-gray-700 rounded-e hover:bg-yellow-500"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* List */}
        <ul data-testid="beers-list" className="mt-4 flex flex-wrap gap-6">
          {beerList[currentPage] !== undefined &&
            beerList[currentPage]!.map((elem) => (
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
                        width={40}
                        height={10}
                        className="h-auto w-auto"
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
