// import { logRoles, render, screen } from "@testing-library/react";
import {
  logRoles,
  render,
  screen,
} from "../../../test-utils/testing-library-utils";
import OrderEntry from "../OrderEntry";
import { http, HttpResponse } from "msw";
import { server } from "../../../mocks/server";

test("handles error for scoops and topping routes", async () => {
  server.resetHandlers(
    http.get(`http://localhost:3030/scoops`, () => {
      return new HttpResponse(null, { status: 500 });
    }),
    http.get(`http://localhost:3030/toppings`, () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  render(<OrderEntry />);
  // const { container } = render(<OrderEntry />);

  //   const alerts = await screen.findAllByRole("alert", {
  //     name: "An unexpected error occurred. Please Try Again later.",
  //   });

  const alerts = await screen.findAllByText(
    "An unexpected error occurred. Please try again later."
  );

  // const alerts = await screen.findAllByRole("alert");

  // logRoles(container);
  expect(alerts).toHaveLength(2);
});
