import axios from "axios";
export const fetchCat = async () => {
  const config = {
    headers: {
      "x-api-key": "9c0bdc13-bbad-484d-b6eb-52096cce4e18",
    },
  };
  const { data } = await axios.get(
    "https://api.thecatapi.com/v1/images/search",
    config
  );
  return data;
};
