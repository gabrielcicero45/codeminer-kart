import { render, screen } from "@testing-library/react";
import RaceForm from "./RaceForm";

const renderComponent = () => {
  const handleRace = jest.fn();
  const tournaments = [];
  const racers = [];
  render(<RaceForm handleSubmit={handleRace} tournaments={tournaments} racers={racers}/>);
};
describe("<RaceForm />", () => {
  it("Must contain the Tournament input", () => {
    renderComponent();

    const tournamentInput = screen.getByLabelText(/tournament/i)
    expect(tournamentInput).toBeInTheDocument()
  });

  it("Must contain the Place input", () => {
    renderComponent();
    const placeInput = screen.getByLabelText(/race place/i)
    expect(placeInput).toBeInTheDocument()
  });

  it("Must contain the Date input", () => {
    renderComponent();
    const dateInput = screen.getByLabelText(/date/i)
    expect(dateInput).toBeInTheDocument()
  });

  it("Must contain the Racers input", () => {
    renderComponent();
    const placementInput = screen.getByLabelText(/racers/i)
    expect(placementInput).toBeInTheDocument()
  });

  it("Must contain the Position input", () => {
    renderComponent();
    const placementInput = screen.getByLabelText(/position/i)
    expect(placementInput).toBeInTheDocument()
  });

  it("Must contain the Confirm racer placement button", () => {
    renderComponent();

    const placementButton = screen.getByRole("button", { name: /Confirm racer placement/i });

    expect(placementButton).toBeInTheDocument();
  });

  it("Must contain the Submit button", () => {
    renderComponent();

    const submitButton = screen.getByRole("button", { name: /Submit/i });

    expect(submitButton).toBeInTheDocument();
  });
});
