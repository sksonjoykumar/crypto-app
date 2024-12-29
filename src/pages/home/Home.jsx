import React, { useContext } from "react";
import Banner from "../../components/banner/Banner";
import ListPage from "../../components/list-page/ListPage";
import { StoreContext } from "../../global-context/GlobalContext";
import GridPage from "../../components/grid-page/GridPage";

function Home() {
  const { currentData } = useContext(StoreContext);
  return (
    <div className="px-4 md:px-20">
      <Banner />
      <div className="hidden md:block">
        <ListPage coins={currentData} />
      </div>
      <div className="block md:hidden">
        <GridPage coins={currentData} />
      </div>
    </div>
  );
}

export default Home;
