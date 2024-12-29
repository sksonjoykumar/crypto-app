import React, { useState, useEffect, useContext } from "react";
import { ScaleLoader } from "react-spinners";
import { toast } from "react-toastify";
import PaginationComponent from "../pagination/Pagination";

const CryptoNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchCryptoNews = async () => {
    const url = "https://crypto-news16.p.rapidapi.com/news/top/60";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e9fb446b2fmsh351a037ba5bead3p1e9a18jsn14a3e05e7f6c",
        "x-rapidapi-host": "crypto-news16.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setNewsData(result);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch news. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoNews();
  }, []);

  //   loading message
  if (loading) {
    return (
      <div className="flex justify-center items-center my-14">
        <ScaleLoader color="#61C96F" loading size={80} speedMultiplier={1} />
      </div>
    );
  }

  if (error) return <div>{toast.error(`${error.message}`)}</div>;

  //   pagination

  const itemsPerPage = 16;
  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentNewsData = newsData.slice(startIndex, startIndex + itemsPerPage);

  //   handlePageChange function
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <div className="px-4 md:px-20 ">
        <div className="crypto-news">
          <h1 className="text-4xl font-outfit font-bold text-[#012D74] mt-5 mb-4 ml-2">
            World Top <span className="text-red-400">Crypto News</span>
          </h1>
          <div className="mb-10 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-7 mt-4">
            {currentNewsData.map((item, index) => (
              <div
                key={item.url || index}
                className="border dark:border-[#0F925C] p-3 rounded-md shadow-sm bg-white dark:bg-gray-800 hover:scale-175 transition-all duration-300"
              >
                <div className="flex gap-2 md:gap-4 font-inter">
                  <a
                    href={item.url}
                    target="blank"
                    title="Open Link"
                    className="w-full cursor-pointer"
                  >
                    <img
                      src={item.thumbnail}
                      alt="News Img"
                      className="w-full h-40  object-cover border dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 text-center rounded-lg"
                    />

                    <p className="mt-2 font-outfit text-sm text-gray-600 dark:text-gray-400 leading-tight hover:text-red-500 transition-all duration-200">
                      {item.description}..
                    </p>
                    <div className="mt-4 flex justify-between">
                      <p className="text-[.75rem] text-gray-600 dark:text-gray-300 ">
                        <span className="">Date:</span> {item.date.slice(0, 16)}
                      </p>
                      <p className="text-[.75rem] text-gray-600 dark:text-gray-300 ">
                        <span className="">Time:</span> {item.date.slice(16)}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination Component */}
          <PaginationComponent
            totalPages={totalPages}
            currentPage={page}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default CryptoNews;
