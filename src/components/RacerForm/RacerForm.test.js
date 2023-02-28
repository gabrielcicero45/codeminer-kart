import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RacerForm from "./RacerForm";

const renderComponent = () => {
  const handleRacer = jest.fn();
  render(<RacerForm handleSubmit={handleRacer} />);
};
describe("<RacerForm />", () => {
  it("Must contain the Name input", () => {
    renderComponent();

    const nameInput = screen.getByLabelText(/Name/i);

    expect(nameInput).toBeInTheDocument();
  });

  it("Must contain the Birth Date input", () => {
    renderComponent();

    const dateInput = screen.getByLabelText(/Birth Date/i);

    expect(dateInput).toBeInTheDocument();
  });

  it("Must contain the Image URL input", () => {
    renderComponent();

    const imgUrlInput = screen.getByLabelText(/Image Url/i);

    expect(imgUrlInput).toBeInTheDocument();
  });

  it("Must contain the Submit button", () => {
    renderComponent();

    const submitButton = screen.getByRole("button", { name: /Submit/i });

    expect(submitButton).toBeInTheDocument();
  });

  describe("When the submit button is clicked", () => {
    it("Should call the onSubmit method", () => {
      const handleSubmit = jest.fn();
      render(<RacerForm handleSubmit={handleSubmit} />);

      const submitButton = screen.getByRole("button", { name: /Submit/i });

      userEvent.click(submitButton);

      expect(handleSubmit).toBeCalled();
    });
  });
});
