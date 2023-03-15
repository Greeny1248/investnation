

import { useState, useEffect } from "react";
import { getCoinList, getExchangeList } from "../api";

export const Ticker = () => {
  const [coins1, setCoinList1] = useState([]);
  const [coins2, setCoinList2] = useState([]);
  const [exchanges, setExchangeList] = useState([]);
  const [selectedExchangeId1, setSelectedExchangeId1] = useState("");
  const [selectedExchangeId2, setSelectedExchangeId2] = useState("");

  useEffect(() => {
    if (selectedExchangeId1) {
      getCoinList(selectedExchangeId1)
        .then((coins) => {
          setCoinList1(coins);
        })
        .catch((err) => {});
    }
  }, [selectedExchangeId1]);

  useEffect(() => {
    if (selectedExchangeId2) {
      getCoinList(selectedExchangeId2)
        .then((coins) => {
          setCoinList2(coins);
        })
        .catch((err) => {});
    }
  }, [selectedExchangeId2]);

  useEffect(() => {
    getExchangeList()
      .then((exchanges) => {
        setExchangeList(exchanges);
      })
      .catch((err) => {});
  }, []);

  const handleSelect1 = (e) => {
    setSelectedExchangeId1(e.target.value);
  };

  const handleSelect2 = (e) => {
    setSelectedExchangeId2(e.target.value);
  };

  return (
    <section className="app">
      <div>
        <select
          name="exchanges"
          id="exchangeList"
          onChange={handleSelect1}
          value={selectedExchangeId1}
        >
          {exchanges &&
            exchanges.length > 0 &&
            exchanges.map((exchange) => {
              return (
                <option key={exchange.id} value={exchange.id}>
                  {exchange.id}
                </option>
              );
            })}
        </select>

        <select
          name="exchanges"
          id="exchangeList"
          onChange={handleSelect2}
          value={selectedExchangeId2}
        >
          {exchanges &&
            exchanges.length > 0 &&
            exchanges.map((exchange) => {
              return (
                <option key={exchange.id} value={exchange.id}>
                  {exchange.id}
                </option>
              );
            })}
        </select>
      </div>
    <section className="container">
      <div id="ticker1" className="cryptoTickers">

        {coins1.tickers &&
          coins1.tickers.length > 0 &&
          coins1.tickers.map((coin) => {
            return (
              <section key={coin.trade_url}>
                <h3>{coin.base}/{coin.target}</h3>
                <p>Price ${coin.last}</p>
                <p>Volume {coin.converted_volume.usd}</p>
                <button>
                  <a href={coin.trade_url} target="_blank" rel="noreferrer">
                    Trade
                  </a>
                </button>
              </section>
            );
          })}
      </div>
      <div id="ticker2" className="cryptoTickers">

        {coins2.tickers &&
          coins2.tickers.length > 0 &&
          coins2.tickers.map((coin) => {
            return (
              <section key={coin.trade_url}>
                <h3>{coin.base}/{coin.target}</h3>
                <p>Price ${coin.last}</p>
                <p>Volume {coin.converted_volume.usd}</p>
                <button>
                  <a href={coin.trade_url} target="_blank" rel="noreferrer">
                    Trade
                  </a>
                </button>
              </section>
            );
          })}
      </div>
      </section>
      </section>)}
