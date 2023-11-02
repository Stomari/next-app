import { IBrewery } from "@/types/api";

export const listBreweries = async (): Promise<IBrewery[] | undefined> => {
  try {
    const response = await fetch("https://api.openbrewerydb.org/v1/breweries");
    return response.json();
  } catch (error) {
    console.warn(error);
  }
};
