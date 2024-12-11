import React from "react";
import Tabs from "../../components/tabs-components/Tabs";
import SearchBox from "../../components/search-box/SearchBox";

function Dashboard() {
  return (
    <div className="px-4 md:px-20">
      <SearchBox />
      <Tabs />
    </div>
  );
}

export default Dashboard;
