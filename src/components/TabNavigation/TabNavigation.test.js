import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TabNavigation from "./TabNavigation";

describe("<TabNavigation />", () => {
  it("Should render the Tab button", () => {
    const tabsList = ["Lorem"];
    render(<TabNavigation tabs={tabsList} />);
    const tabButton = screen.getByRole("button", {
      name: /Lorem/i,
    });

    expect(tabButton).toBeInTheDocument();
  });

  describe("When the Tab button is clicked", () => {
    it("Should call the renderTab method", () => {
      const changeState = jest.fn();
      const tabsList = ["Lorem"];
      render(<TabNavigation tabs={tabsList} renderTab={changeState} />);

      const tabButton = screen.getByRole("button", {
        name: /Lorem/i,
      });

      userEvent.click(tabButton);

      expect(changeState).toBeCalled();
    });
  });
});
