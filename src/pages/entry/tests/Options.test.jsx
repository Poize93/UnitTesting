import { screen, render } from "@testing-library/react";
import Options from "../Options";

test("display image for all scoops from the server", async () => {
  render(<Options optionType="scoops" />);
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((item) => item.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("display image for all toppings from the server", async () => {
  render(<Options optionType={"toppings"} />);
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });

  expect(toppingImages).toHaveLength(3);

  const altText_1 = toppingImages.map((item) => item?.alt);
  expect(altText_1).toEqual([
    "Cherries Topping",
    "M&Ms Topping",
    "Hot fudge Topping",
  ]);
});
