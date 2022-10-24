import { fetchCat, fetchCatList } from "../catService";
it("returns a cat", async () => {
  const response = await fetchCat();
  expect(response.length).toBe(1);
});

// test that cat service return 9 cats
it("returns 9 cats", async () => {
  const response = await fetchCatList();
  expect(response.length).toBe(9);
});
