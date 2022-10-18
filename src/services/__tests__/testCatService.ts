import { fetchCat } from "../catService";
it("returns a cat", async () => {
  const response = await fetchCat();
  expect(response.length).toBe(1);
});
