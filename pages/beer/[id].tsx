import { getBeerData } from "@/api";
import Layout from "@/components/layout";
import { IBeer } from "@/types/api";
import { GetStaticPaths, GetStaticProps } from "next";

interface IBeerProps {
  beerData: IBeer[];
}

export const Beer = ({ beerData }: IBeerProps) => {
  const { name } = beerData[0];

  // TODO: Implement better layout and add more beer information
  return (
    <Layout>
      <h1>{name}</h1>
    </Layout>
  );
};

export default Beer;

export const getStaticPaths: GetStaticPaths = async (props) => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const beerData = await getBeerData(parseInt(params?.id as string));
  return { props: { beerData } };
};
