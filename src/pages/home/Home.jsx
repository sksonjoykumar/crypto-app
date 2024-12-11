import React, { useContext } from "react";
import Banner from "../../components/banner/Banner";
import ListPage from "../../components/list-page/ListPage";
import { StoreContext } from "../../global-context/GlobalContext";

function Home() {
  const { currentData } = useContext(StoreContext);
  return (
    <div className="px-4 md:px-20">
      <Banner />
      <ListPage coins={currentData} />
    </div>
  );
}

export default Home;
