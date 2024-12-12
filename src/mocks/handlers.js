import { http, HttpResponse, delay } from "msw";

export const handlers = [
  http.get("http://localhost:3030/scoops", () => {
    // Note that you DON'T have to stringify the JSON!
    return HttpResponse.json([
      {
        name: "Chocolate",
        imagePath: "/images/chocolate.png",
      },
      {
        name: "Vanilla",
        imagePath: "/images/vanilla.png",
      },
    ]);
  }),

  http.get("http://localhost:3030/toppings", () => {
    return HttpResponse.json([
      { name: "Cherries", imagePath: "/image/cherries.png" },
      { name: "M&Ms", imagePath: "/image/m-and-ms.png" },
      { name: "Hot fudge", imagePath: "/image/hot-fudge.png" },
    ]);
  }),

  http.post("http://localhost:3030/order", async () => {
    delay(100);
    return HttpResponse.json({ orderNumber: 1234567890 }, { status: 201 });
  }),
];
