import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../global-context/GlobalContext";
import { fetchData } from "../../global-api-call/apiCall";
import CoinHeader from "../coin-header/CoinHeader";

import CompareChart from "./CompareChart";
import { ScaleLoader } from "react-spinners";

function ComparePage() {
  const { coins, setLoading, setError } = useContext(StoreContext);
  const [selectedCoin1, setSelectedCoin1] = useState(null);
  const [selectedCoin2, setSelectedCoin2] = useState(null);
  const [coinData1, setCoinData1] = useState(null);
  const [coinData2, setCoinData2] = useState(null);
  const [coinInfo1, setCoinInfo1] = useState([]);
  const [coinInfo2, setCoinInfo2] = useState([]);
  const [days, setDays] = useState(30);

  useEffect(() => {
    // Set default coins: Bitcoin (index 0) and Ethereum (index 1)
    if (coins.length > 1) {
      handleSelect(
        { target: { value: coins[0].id } },
        setSelectedCoin1,
        setCoinData1,
        setCoinInfo1
      );
      handleSelect(
        { target: { value: coins[1].id } },
        setSelectedCoin2,
        setCoinData2,
        setCoinInfo2
      );
    }
  }, [coins]);

  const handleSelect = async (e, coinSetter, dataSetter, infoSetter) => {
    const coinId = e.target.value;
    coinSetter(coinId);

    if (coinId) {
      setLoading(true);

      // Fetch coin data
      await fetchData(
        `https://api.coingecko.com/api/v3/coins/${coinId}`,
        {},
        (data) => dataSetter(data),
        (errorMessage) => setError(errorMessage)
      );

      // Fetch market chart data
      await fetchData(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
        {},
        (data) => infoSetter(data.prices),
        (errorMessage) => setError(errorMessage)
      ).finally(() => setLoading(false));
    }
  };

  return (
    <div className="px-4 md:px-20 mb-5">
      {/* Select Coins */}
      <div className="my-4 font-inter flex gap-6 justify-around flex-col sm:flex-row">
        <form className=" w-auto lg:w-[300px]">
          <label
            htmlFor="coin1"
            className="block pb-1 text-base font-semibold ml-1 text-gray-800 dark:text-gray-200"
          >
            Select Crypto One
          </label>
          <select
            id="coin1"
            className="border-2 border-[#3A7FE9] text-gray-900 text-base rounded-lg block w-full p-3 dark:bg-gray-800 dark:placeholder-gray-400 dark:text-gray-200 cursor-pointer focus:outline-none"
            value={selectedCoin1 || ""}
            onChange={(e) =>
              handleSelect(e, setSelectedCoin1, setCoinData1, setCoinInfo1)
            }
          >
            <option value="">Choose a Coin</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.id}>
                {coin.name}
              </option>
            ))}
          </select>
        </form>
        <form className="w-auto lg:w-[300px]">
          <label
            htmlFor="coin2"
            className="block pb-1 text-base font-semibold ml-1 text-gray-800 dark:text-gray-200"
          >
            Select Crypto Two
          </label>
          <select
            id="coin2"
            className="border-2 border-[#3A7FE9] text-gray-900 text-base rounded-lg block w-full p-3 dark:bg-gray-800 dark:placeholder-gray-400 dark:text-gray-200 cursor-pointer focus:outline-none"
            value={selectedCoin2 || ""}
            onChange={(e) =>
              handleSelect(e, setSelectedCoin2, setCoinData2, setCoinInfo2)
            }
          >
            <option value="">Choose a Coin</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.id}>
                {coin.name}
              </option>
            ))}
          </select>
        </form>
      </div>

      {/* Display CoinHeaders */}
      <div>
        <div className="mb-4">
          {" "}
          {coinData1 && <CoinHeader coinDataArray={[coinData1]} />}
        </div>
        <div> {coinData2 && <CoinHeader coinDataArray={[coinData2]} />}</div>
      </div>

      {/* Chart Comparison */}
      <div className="mt-10">
        {coinInfo1.length && coinInfo2.length ? (
          <CompareChart
            coinInfoData={[
              { name: selectedCoin1, data: coinInfo1 },
              { name: selectedCoin2, data: coinInfo2 },
            ]}
          />
        ) : (
          <p className="text-center text-gray-600">
            {/* Select two coins to compare. */}
            <div className="flex justify-center items-center my-14">
              <ScaleLoader
                color="#61C96F"
                loading
                size={80}
                speedMultiplier={1}
              />
            </div>
          </p>
        )}
      </div>

      {/* coinData Description */}
      <div className="mt-4 mb-10">
        {/* coinData1 Description */}

        {coinData1 ? (
          <div className="">
            <h1 className="font-inter uppercase text-sm lg:text-lg font-semibold text-[#0F925C] dark:text-[#3A6FE9]">
              {coinData1.name}
            </h1>
            <p className="px-1 text-justify font-sans mt-1 font-normal text-base leading-normal text-gray-600 dark:text-gray-400">
              {coinData1.description.en.slice(0, 510)}
            </p>
          </div>
        ) : (
          "No Coin data description!"
        )}

        {coinData2 ? (
          <div className="mt-4">
            <h1 className="font-inter uppercase text-sm lg:text-lg font-semibold text-[#0F925C] dark:text-[#3A6FE9]">
              {coinData2.name}
            </h1>
            <p className="px-1 text-justify font-sans mt-1 font-normal text-base leading-normal text-gray-600 dark:text-gray-400">
              {coinData2.description.en.slice(0, 510)}
            </p>
          </div>
        ) : (
          "No Coin data description!"
        )}
      </div>
    </div>
  );
}

export default ComparePage;
