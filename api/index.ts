import { IBeer } from "@/types/api";

export const listBeers = async (
  perPage?: number,
  page?: number,
): Promise<IBeer[] | undefined> => {
  try {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?per_page=${perPage || 50}&page=${
        page || 1
      }`,
    );
    return response.json();
  } catch (error) {
    console.warn(error);
  }
};

export const getBeerData = async (id: number): Promise<IBeer[] | undefined> => {
  try {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers/${id}`,
    );
    return response.json();
  } catch (error) {
    console.warn(error);
  }
};
