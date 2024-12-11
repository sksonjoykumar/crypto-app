import React, { useContext } from "react";
import { IoIosStarOutline, IoMdTrendingUp } from "react-icons/io";
import { LuTrendingDown } from "react-icons/lu";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { StoreContext } from "../../global-context/GlobalContext";
import PaginationComponent from "../pagination/Pagination";
import { ScaleLoader } from "react-spinners";

function GridPage({ coins }) {
  const { page, totalPages, handlePageChange, loading } =
    useContext(StoreContext);

  //   loading message
  if (loading) {
    return (
      <div className="flex justify-center items-center my-14">
        <ScaleLoader color="#61C96F" loading size={80} speedMultiplier={1} />
      </div>
    );
  }

  return (
    <>
      <div>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 font-inter"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {coins.map((data) => (
            <Link
              to={`/coin/${data.id}`}
              key={data.id}
              className={`px-7 py-6 bg-gray-100 dark:bg-gray-800 rounded-xl hover:border-2 hover:scale-175 transition-all duration-500 cursor-pointer ${data.market_cap_change_percentage_24h > 0 ? "hover: hover:border-[#61C96F]" : "hover:border-[#F94141]"} `}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex justify-between gap-3">
                  <img className="w-12" src={data.image} alt={data.name} />
                  <div>
                    <p className="uppercase text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {data.symbol}-USD
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {data.name}
                    </p>
                  </div>
                </div>
                <div>
                  {data.market_cap_change_percentage_24h > 0 ? (
                    <button
                      type="button"
                      className=" p-2 rounded-full border-2 text-[#61C96F] border-[#61C96F] hover:bg-[#61C96F] hover:text-gray-100 dark:text-gray-200 transition-all duration-200"
                    >
                      <IoIosStarOutline size={24} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className=" p-2 rounded-full border-2 text-[#F94141] border-[#F94141] hover:bg-[#F94141] hover:text-gray-100 dark:text-gray-200 transition-all duration-200"
                    >
                      <IoIosStarOutline size={24} />
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-7  text-base font-semibold ">
                {data.market_cap_change_percentage_24h > 0 ? (
                  <div className="flex items-center gap-3">
                    <p
                      title="Price change in 24Hrs."
                      className="py-1 px-4 rounded-3xl border-2 text-[#61C96F] border-[#61C96F] hover:bg-[#61C96F] hover:text-gray-800 transition-all duration-300 dark:text-gray-100"
                    >
                      +{data.market_cap_change_percentage_24h.toFixed(2)} %
                    </p>
                    <p className="h-9 w-9 rounded-full  border-2 border-[#61C96F] hover:bg-[#61C96F] hover:text-gray-800 flex justify-center items-center transition-all duration-300 dark:text-gray-100">
                      <IoMdTrendingUp size={22} />
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <p className="py-1 px-4 rounded-3xl border-2 text-[#F94141] border-[#F94141] hover:bg-[#F94141] hover:text-gray-800 transition-all duration-300 dark:text-gray-100">
                      {data.market_cap_change_percentage_24h.toFixed(2)} %
                    </p>
                    <p className="h-9 w-9 rounded-full  border-2 border-[#F94141] hover:bg-[#F94141] hover:text-gray-800 flex justify-center items-center transition-all duration-300 dark:text-gray-100">
                      <LuTrendingDown size={22} />
                    </p>
                  </div>
                )}
              </div>

              <p
                className={`mt-5 text-xl font-semibold ${data.market_cap_change_percentage_24h > 0 ? "text-[#61C96F]" : "text-[#F94141]"} `}
              >
                ${data.current_price.toLocaleString()}
              </p>

              <div className="mt-3">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 pb-2">
                  Total Volume :{" "}
                  <span className="font-normal">
                    ${data.total_volume.toLocaleString()}
                  </span>
                </p>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                  Market Cap :{" "}
                  <span className="font-normal">
                    ${data.market_cap.toLocaleString()}
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Pagination Component */}
        <PaginationComponent
          totalPages={totalPages}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default GridPage;
