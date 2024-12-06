import SummaryForm from "./summaryForm";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//
//
test("initial Condition", () => {
  render(<SummaryForm />);
  const checkBox = screen.getByRole("checkbox", {
    name: /Terms and Conditions/i,
  });
  expect(checkBox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", { name: /Confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test("Enable the button on odd clicks and disabled for even clicks", () => {
  // const user = userEvent.setup();
  render(<SummaryForm />);
  const checkBox = screen.getByRole("checkbox", {
    name: /Terms and Conditions/i,
  });

  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  fireEvent.click(checkBox);
  expect(confirmButton).toBeEnabled();

  fireEvent.click(checkBox);
  expect(confirmButton).toBeDisabled();

  // await user.click(checkBox);
  // expect(confirmButton).toBeEnabled();

  // await user.click(checkBox);
  // expect(confirmButton).toBeDisabled();
});

test("popover respondes to hover", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const nulPopOver = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nulPopOver).not.toBeInTheDocument();

  //

  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);
  const popOver = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popOver).toBeInTheDocument();

  //
  await user.unhover(termsAndConditions);

  expect(popOver).not.toBeInTheDocument();

  // user.hover();
});
