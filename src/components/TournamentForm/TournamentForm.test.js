import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TournamentForm from "./TournamentForm";

const renderComponent = () => {
  const handleSubmit = jest.fn();
  render(<TournamentForm handleSubmit={handleSubmit} />);
};
describe("<TournamentForm />", () => {
  it("Must contain the Name input", () => {
    renderComponent();

    const nameInput = screen.getByLabelText(/Name/i);

    expect(nameInput).toBeInTheDocument();
  });

  it("Must contain the Submit button", () => {
    renderComponent();

    const submitButton = screen.getByRole("button", { name: /Submit/i });

    expect(submitButton).toBeInTheDocument();
  });

  describe("When the submit button is clicked", () => {
    it("Should call the onSubmit method", () => {
      const handleSubmit = jest.fn();
      render(<TournamentForm handleSubmit={handleSubmit} />);

      const submitButton = screen.getByRole("button", { name: /Submit/i });

      userEvent.click(submitButton);

      expect(handleSubmit).toBeCalled();
    });
  });
});
