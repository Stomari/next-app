import { getBeerData } from '@/api';
import Layout from '@/components/layout';
import { IBeer } from '@/types/api';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';

interface IBeerProps {
  beerData: IBeer[];
}

export const Beer = ({ beerData }: IBeerProps) => {
  const { name, description, image_url, food_pairing, abv, ibu, ingredients } =
    beerData[0];

  return (
    <Layout>
      <section className="flex items-center  w-full">
        <div className="flex flex-col gap-3 bg-white  w-full m-10 rounded p-10 border border-black h-fit">
          <div className="self-center">
            {!!image_url && (
              <Image
                src={image_url}
                alt={name || ''}
                width={100}
                height={100}
                className="object-scale-down"
              />
            )}
          </div>
          <div className="flex-1">
            <p className="text-lg mb-2">
              <span className="font-bold">Name:</span> {name}
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold">Description:</span> {description}
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold">Food Pairing:</span>{' '}
              {!!food_pairing?.length && food_pairing.join(', ')}
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold">{`ABV (Alcohol By Volume):`}</span>{' '}
              {`${abv}%`}
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold">{`IBU (International Bittering Unit):`}</span>{' '}
              {ibu}
            </p>
            <div className="text-lg">
              <span className="font-bold">Ingredients: </span>
              <ul className="ps-5">
                <li className="list-disc">
                  Malt: {ingredients?.malt?.map((elem) => elem.name).join(', ')}
                </li>
                <li className="list-disc">
                  Hops: {ingredients?.hops?.map((elem) => elem.name).join(', ')}
                </li>
                <li className="list-disc">Yeast: {ingredients?.yeast}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Beer;

export const getStaticPaths: GetStaticPaths = async (props) => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const beerData = await getBeerData(parseInt(params?.id as string));
  return { props: { beerData } };
};
