import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IBeer } from "@/types/api";
import Home from "../pages/index";

describe("Home", () => {
  it("renders title", () => {
    render(<Home />);

    const title = screen.getByTestId("title");

    expect(title).toBeInTheDocument();
  });

  it("renders beers list", () => {
    const beersListMock: IBeer[] = [
      { id: 1, name: "Beer 1", description: "Tasty beer", image_url: "url" },
      { id: 2, name: "Beer 2", description: "Another tasty beer" },
    ];

    render(<Home beers={beersListMock} />);

    beersListMock.forEach((elem) => {
      expect(screen.getByText(elem.name!)).toBeInTheDocument();
      expect(screen.getByText(elem.description!)).toBeInTheDocument();
      if (elem.image_url) {
        expect(screen.getByAltText(elem.name!)).toBeInTheDocument();
      }
    });
  });
});
