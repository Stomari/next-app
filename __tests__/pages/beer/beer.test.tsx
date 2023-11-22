import { render, screen } from '@testing-library/react';
import { IBeer } from '@/types/api';
import Beer from '@/pages/beer/[id]';

const beerDataMock: IBeer[] = [
  {
    id: 1,
    name: 'MockBeer',
    description: 'Mock description',
    image_url: 'Mock url',
    food_pairing: ['Mock', 'Lorem Ipsum'],
    abv: 5,
    ibu: 50,
    ingredients: {
      malt: [{ name: 'Mock Malt' }],
      hops: [{ name: 'Mock Hops 1' }, { name: 'Mock Hops 2' }],
      yeast: 'Mock Yeast',
    },
  },
];

describe('Beer', () => {
  it('renders card with all details', () => {
    render(<Beer beerData={beerDataMock} />);

    const name = screen.getByText(beerDataMock[0].name!);
    const description = screen.getByText(beerDataMock[0].description!);
    const foodPairing = screen.getByText(
      beerDataMock[0].food_pairing!.join(', '),
    );
    const image = screen.getByAltText(beerDataMock[0].name!);
    const abv = screen.getByText(`${beerDataMock[0].abv!}%`);
    const ibu = screen.getByText(`${beerDataMock[0].ibu!}`);
    const malt = screen.getByText(
      beerDataMock[0].ingredients!.malt!.map((elem) => elem.name).join(', '),
      { exact: false },
    );
    const hops = screen.getByText(
      beerDataMock[0].ingredients!.hops!.map((elem) => elem.name).join(', '),
      { exact: false },
    );
    const yeast = screen.getByText(beerDataMock[0].ingredients!.yeast!, {
      exact: false,
    });

    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(foodPairing).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(abv).toBeInTheDocument();
    expect(ibu).toBeInTheDocument();
    expect(malt).toBeInTheDocument();
    expect(hops).toBeInTheDocument();
    expect(yeast).toBeInTheDocument();
  });
});
