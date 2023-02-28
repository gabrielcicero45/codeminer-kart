import { render, screen } from "@testing-library/react";
import RacersList from "./RacersList";

const renderComponent = () => {
  const racers = [{ 
    id: 1,
    name: "Paulo Vilarinho",
    born_at: "1997-11-16",
    image_url: "https://www.fakeurl.com/photo.jpg"
  },
  { 
    id: 2,
    name: "Paulo Vilarinho 2",
    born_at: "1997-11-16",
    image_url: "https://www.fakeurl.com/photo.jpg"
  }
  ]
  render(<RacersList racers={racers} />);
};
describe("<RacersList />", () => {
  it("Should have the same size as the data entry", ()=> {
    renderComponent()
    const racers = screen.getAllByAltText(/racer/i)

    expect(racers).toHaveLength(2)
  })
});