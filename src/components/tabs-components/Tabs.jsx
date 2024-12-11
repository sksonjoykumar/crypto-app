import React, { useContext, useEffect, useState } from "react";
import GridPage from "../grid-page/GridPage";
import ListPage from "../list-page/ListPage";
import { StoreContext } from "../../global-context/GlobalContext";

function Tabs() {
  const [activeTab, setActiveTab] = useState("grid");
  const { currentData } = useContext(StoreContext);
  return (
    <div className="mt-5">
      <div className="mb-4 dark:border-gray-700">
        <ul
          className="flex justify-around gap-10 text-lg font-inter font-semibold text-center"
          role="tablist"
        >
          <li
            className={`w-[50%] border-b-2 ${
              activeTab === "grid"
                ? "border-[#0F925C] text-[#3A80E9] dark:text-gray-200 dark:border-[#3A80E9]"
                : "border-transparent text-gray-500 hover:text-[#0F925C] hover:border-[#3A80E9]"
            }`}
            role="presentation"
          >
            <button
              className="w-full py-2"
              onClick={() => setActiveTab("grid")}
              type="button"
              role="tab"
              aria-controls="styled-profile"
              aria-selected={activeTab === "grid"}
            >
              Grid
            </button>
          </li>
          <li
            className={`w-[50%] border-b-2 ${
              activeTab === "list"
                ? "border-[#0F925C] text-[#3A80E9] dark:text-gray-200 dark:border-[#3A80E9]"
                : "border-transparent text-gray-500 hover:text-[#0F925C] hover:border-[#3A80E9]"
            }`}
            role="presentation"
          >
            <button
              className="w-full py-2"
              onClick={() => setActiveTab("list")}
              type="button"
              role="tab"
              aria-controls="styled-dashboard"
              aria-selected={activeTab === "list"}
            >
              List
            </button>
          </li>
        </ul>
      </div>
      <div>
        {activeTab === "grid" && (
          <div className="mt-10">
            <GridPage coins={currentData} />
          </div>
        )}
        {activeTab === "list" && (
          <div className="mt-10">
            <ListPage coins={currentData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
