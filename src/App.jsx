import React, { useState } from "react";
import { Outlet, Route, Routes, ScrollRestoration } from "react-router-dom";
import Home from "./pages/home/Home";
import ComparePage from "./components/compare-page/ComparePage";
import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Toast from "./components/toast-message/Toast";
import BackToTop from "./components/back-to-top/BackToTop";
import CoinPage from "./components/coin-page/CoinPage";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        {/* header component */}
        <BackToTop />
        <Toast />
        <ScrollRestoration />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/coin/:id" element={<CoinPage />} />
        </Routes>

        {/* footer component */}
        <footer>
          <Footer />
        </footer>

        <Outlet />
      </div>
    </>
  );
}

export default App;
