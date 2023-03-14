import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.coingecko.com/api/v3",
  });

  export const getCoin = () =>{
    return instance
    .get('/coins/bitcoin')
    .then((res)=>{
       
        return res.data
    })
}

export const getCoinList = (exchange_id) =>{
  return instance
  .get(`/exchanges/${exchange_id}/tickers`)
  .then((res)=>{
   
      return res.data
  })
}

export const getExchangeList = () =>{
  return instance
  .get('/exchanges')
  .then((res)=>{
      return res.data
  })
}