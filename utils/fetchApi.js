import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "bb1536a4bemsh6e63310a9204027p10552bjsn4e4607a9c52d",
    },
  });
  return data;
};
