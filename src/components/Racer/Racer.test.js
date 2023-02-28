import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Racer from "./Racer";

const renderComponent = () => {
  const racer = { 
    id: 1,
    name: "Paulo Vilarinho",
    born_at: "16/11/1997",
    image_url: "https://www.fakeurl.com/photo.jpg"
  }
  
render(<Racer name={racer.name} bornAt={racer.born_at} image_url={racer.image_url} />);
};

describe("<Racers />", () => {
  it("Should render the Racer correctly", ()=> {
    renderComponent()
    const racerName = screen.getByText(/paulo vilarinho/i)
    const racerBornAt = screen.getByText(/16\/11\/1997/i)
    const racerImage = screen.getByAltText(/racer/i)
    
    expect(racerName).toBeInTheDocument()
    expect(racerBornAt).toBeInTheDocument()
    expect(racerImage).toBeInTheDocument()
  })
});