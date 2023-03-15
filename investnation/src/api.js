import axios from "axios";



const instance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});
const stockInstance = axios.create({
  baseURL: "https://eodhistoricaldata.com/api",
});


export const getCoin = () => {
  return instance.get("/coins/bitcoin").then((res) => {
    return res.data;
  });
};

export const getCoinList = (exchange_id) => {
  return instance.get(`/exchanges/${exchange_id}/tickers`).then((res) => {
    return res.data;
  });
};

export const getExchangeList = () => {
  return instance.get("/exchanges").then((res) => {
    return res.data;
  });
};

// const stockInstance = axios.create({
//   baseURL: "https://tradestie.com/api/v1",
// });

export const getRedditSentiment = () => {
  return stockInstance.get("/news?api_token=demo&s=AAPL.US&offset=0&limit=10").then((res) => {
    console.log(res)
    return res.data;
  });
};
