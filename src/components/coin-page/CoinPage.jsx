import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../global-context/GlobalContext";
import { toast } from "react-toastify";
import { ScaleLoader } from "react-spinners";
import CoinHeader from "../coin-header/CoinHeader";
import LineChart from "../coin-page-chart/LineChart";
import { fetchData } from "../../global-api-call/apiCall";

function CoinPage() {
  const { loading, setLoading, setError } = useContext(StoreContext);
  const [coinData, setCoinData] = useState(null);
  const [showMore, setShowMore] = useState(true);
  const [days, setDays] = useState(30);
  const [coinInfo, setCoinInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setLoading(true);

      const fetchCoinData = async () => {
        const options = {
          method: "GET",
          headers: { accept: "application/json" },
        };

        // Fetch coin details
        await fetchData(
          `https://api.coingecko.com/api/v3/coins/${id}`,
          options,
          (data) => setCoinData(data),
          (errorMessage) => {
            setError(errorMessage);
            toast.error(errorMessage);
          }
        );

        // Fetch market chart data
        await fetchData(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
          options,
          (data) => setCoinInfo(data.prices),
          (errorMessage) => {
            setError(errorMessage);
            toast.error(errorMessage);
          }
        ).finally(() => setLoading(false));
      };

      fetchCoinData();
    }
  }, [id, days]);

  //   loading message
  if (loading) {
    return (
      <div className="flex justify-center items-center my-14">
        <ScaleLoader color="#61C96F" loading size={80} speedMultiplier={1} />
      </div>
    );
  }

  // coinData is not available show error
  if (!coinData) {
    return <p className="text-center text-gray-600">No data available.</p>;
  }

  // coinInfo is not available show error
  if (!coinInfo.length) {
    return (
      <p className="text-center text-gray-600">No chart data available.</p>
    );
  }

  // coinDataArray convert is an array
  const coinDataArray = [coinData];

  return (
    <>
      <div className="px-4 md:px-20 my-6">
        <CoinHeader coinDataArray={coinDataArray} />

        {/* Coin Page Chart */}
        <div className="">
          <LineChart coinInfoData={coinInfo} />
        </div>

        {/* Coin page description */}
        <div>
          {coinDataArray.map((data) => (
            <div
              key={data.id}
              className="mt-5 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 cursor-pointer "
            >
              <h1 className="font-inter uppercase text-sm lg:text-lg font-semibold text-[#0F925C] dark:text-[#3A6FE9]">
                {data.name}
              </h1>

              {showMore ? (
                <p className="px-1 text-justify font-sans mt-1 font-normal text-base leading-normal text-gray-600 dark:text-gray-400">
                  {data.description.en.slice(0, 400)}
                  <button
                    className="ml-1 text-gray-700 dark:text-gray-300 hover:text-[#0F925C] transition-all dark:hover:text-[#0F925C] hover:border-b border-[#0F925C]"
                    type="button"
                    onClick={() => setShowMore(!showMore)}
                  >
                    Read more...
                  </button>
                </p>
              ) : (
                <p className="px-1 text-justify font-sans mt-1 font-normal text-base leading-normal text-gray-600 dark:text-gray-400">
                  {data.description.en}{" "}
                  <button
                    className="ml-1 text-gray-700 dark:text-gray-300 hover:text-[#0F925C] transition-all dark:hover:text-[#0F925C] hover:border-b border-[#0F925C]"
                    type="button"
                    onClick={() => setShowMore(!showMore)}
                  >
                    Read less..
                  </button>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CoinPage;
