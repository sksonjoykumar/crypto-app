import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchData } from "../global-api-call/apiCall";

// store context
export const StoreContext = createContext();

function GlobalContext({ children }) {
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch only if coins data does not exist
    if (coins.length > 0) return;

    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        // "x-cg-pro-api-key": "CG-AQ5XYoFcGqjoN48j9YbG1Cj6",
      },
    };

    const onSuccess = (data) => {
      setCoins(data);
      setError(null);
    };

    const onError = (errorMessage) => {
      setError(errorMessage);
      toast.error(errorMessage);
    };

    fetchData(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
      options,
      onSuccess,
      onError
    ).finally(() => setLoading(false));
  }, []);

  // handleSearch function
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const filterCoins = coins.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const itemsPerPage = 16;
  const totalPages = Math.ceil(filterCoins.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentData = filterCoins.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const contextValue = {
    coins,
    setCoins,
    loading,
    setLoading,
    error,
    setError,
    page,
    setPage,
    itemsPerPage,
    totalPages,
    startIndex,
    currentData,
    handlePageChange,
    handleSearch,
    search,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}

export default GlobalContext;
