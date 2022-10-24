import axios from "axios";
export const fetchCat = async () => {
  const config = {
    headers: {
      "x-api-key": process.env.REACT_APP_CATKEY,
    },
  };
  const { data } = await axios.get(
    "https://api.thecatapi.com/v1/images/search",
    config
  );
  return data;
};
export const fetchCatList = async () => {
  const config = {
    headers: {
      "x-api-key": process.env.REACT_APP_CATKEY,
    },
  };
  const { data } = await axios.get(
    "https://api.thecatapi.com/v1/images/search?limit=9",
    config
  );
  return data;
};
