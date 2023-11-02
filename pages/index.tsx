import { listBreweries } from "@/api";
import Layout from "@/components/layout";
import { IBrewery } from "@/types/api";

export default function Home({ breweries = [] }: { breweries?: IBrewery[] }) {
  return (
    <Layout home>
      <main className="p-6">
        <h1 className="text-5xl">Breweries</h1>
        <ul>
          {breweries.map((elem) => (
            <li key={elem.id}>{elem.name}</li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const breweries = await listBreweries();
  return {
    props: {
      breweries,
    },
  };
};
