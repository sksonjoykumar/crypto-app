import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { motion } from "motion/react";
import { StoreContext } from "../../global-context/GlobalContext";
function SearchBox() {
  const { handleSearch, search } = useContext(StoreContext);
  return (
    <motion.div
      className="mt-5"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <form className="max-w-6xl mx-auto font-inter ">
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>

        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <BsSearch size={25} className="text-gray-500 dark:text-gray-300" />
          </div>
          <input
            onChange={handleSearch}
            type="search"
            id="search"
            value={search}
            className="block w-full px-6 py-3 ps-10 text-gray-900 border border-[#0F925C] rounded-full focus:outline-none bg-gray-50 focus:ring-blue-500 focus:border-[#3A6FE9] dark:bg-gray-900 dark:border-[#0F925C] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-base"
            placeholder="Search "
            required
          />
        </div>
      </form>
    </motion.div>
  );
}

export default SearchBox;
