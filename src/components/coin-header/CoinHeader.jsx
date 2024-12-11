import React from "react";
import { motion } from "motion/react";
import { IoMdTrendingUp } from "react-icons/io";
import { LuTrendingDown } from "react-icons/lu";
function CoinHeader({ coinDataArray }) {
  return (
    <>
      {coinDataArray.map((data) => (
        <motion.div
          className=" bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-2 cursor-pointer  "
          key={data.id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 my-2 justify-center items-center">
            <div className="flex items-start gap-1 md:gap-4 xl:gap-8">
              <img className="w-14" src={data.image.large} alt={data.name} />
              <div>
                <p className="uppercase text-sm lg:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {data.symbol}-USD
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {data.name}
                </p>
              </div>
            </div>

            <div className="text-base font-semibold">
              {data.market_data.market_cap_change_percentage_24h > 0 ? (
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <p
                    title="Price change in 24Hrs"
                    className="hidden sm:block py-1 px-4 lg:px-2 xl:px-4 rounded-3xl border-2 text-[#61C96F] border-[#61C96F] hover:bg-[#61C96F] hover:text-gray-800 transition-all duration-300 dark:text-gray-100"
                  >
                    +
                    {data.market_data.market_cap_change_percentage_24h.toFixed(
                      2
                    )}{" "}
                    %
                  </p>
                  <p className="hidden h-9 w-9 rounded-full border-2 border-[#61C96F] hover:bg-[#61C96F] hover:text-gray-800 lg:flex justify-center items-center transition-all duration-300 dark:text-gray-100">
                    <IoMdTrendingUp size={22} />
                  </p>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <p className="hidden sm:block py-1 px-4 lg:px-2 xl:px-4 rounded-3xl border-2 text-[#F94141] border-[#F94141] hover:bg-[#F94141] hover:text-gray-800 transition-all duration-300 dark:text-gray-100">
                    {data.market_data.market_cap_change_percentage_24h.toFixed(
                      2
                    )}{" "}
                    %
                  </p>
                  <p className="hidden h-9 w-9 rounded-full border-2 border-[#F94141] hover:bg-[#F94141] hover:text-gray-800 lg:flex justify-center items-center transition-all duration-300 dark:text-gray-100">
                    <LuTrendingDown size={22} />
                  </p>
                </div>
              )}
            </div>

            <div>
              <p
                className={`text-lg md:text-xl font-semibold ${
                  data.market_data.market_cap_change_percentage_24h > 0
                    ? "text-[#61C96F]"
                    : "text-[#F94141]"
                } `}
              >
                ${data.market_data.current_price.usd.toLocaleString()}
              </p>
            </div>

            <div>
              <p className="hidden md:block text-base font-semibold text-gray-600 dark:text-gray-300 ">
                Total Volume :{" "}
                <span className="font-normal">
                  ${data.market_data.total_volume.usd.toLocaleString()}
                </span>
              </p>
            </div>
            <div>
              <p className="hidden lg:block text-base font-semibold text-gray-600 dark:text-gray-300">
                Market Cap :{" "}
                <span className="font-normal">
                  ${data.market_data.market_cap.usd.toLocaleString()}
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}

export default CoinHeader;
