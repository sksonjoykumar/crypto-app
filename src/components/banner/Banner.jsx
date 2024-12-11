import React, { useState } from "react";
import bannerImg from "../../assets/images/c-bg.png";
import bgImg from "../../assets/images/gradient.png";
import bgImg2 from "../../assets/images/bg-.jpg";
import { Link } from "react-router-dom";
import ShareSocialMedia from "../share-social-media/ShareSocialMedia";
import { motion } from "motion/react";

function Banner() {
  const [shareBox, setShareBox] = useState(false);
  const shareUrl = "https://yourwebsite.com";
  const shareTitle = "Check out this amazing content!";
  return (
    <div>
      <div className=" flex flex-col md:flex-row  gap-10 md:gap-0 justify-between mt-10 md:mt-16 ">
        <div className="relative font-inter w-full text-center md:text-left">
          <motion.h1
            className="text-5xl lg:text-7xl 2xl:text-[6.5rem] font-bold text-gray-800 dark:text-[#0F925C]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {" "}
            Track
            <span className="text-[#0F925C] dark:text-gray-300 ml-3">
              Crypto
            </span>{" "}
          </motion.h1>
          <motion.h1
            className="text-4xl lg:text-6xl 2xl:text-[6rem] font-bold text-[#3A80E9] mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Real Time.
          </motion.h1>
          <motion.p
            className="text-md text-gray-600 dark:text-gray-200 font-outfit mt-3 lg:mt-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Track crypto through a public api in real time. Visit the dashboard
            to do so!
          </motion.p>
          <motion.div
            className="mt-8 flex gap-3 justify-center md:justify-start md:gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link
              to={"/dashboard"}
              className="bg-[#3A80E9]  w-36 text-center py-2.5 rounded-3xl text-white text-base hover:bg-[#3a6fe9] transition-all duration-200"
            >
              Dashboard
            </Link>
            <button
              type="button"
              className="border outline-none border-[#3A80E9] w-36 text-center py-2.5 rounded-3xl text-black dark:text-white text-base hover:bg-[#3A80E9] transition-all duration-300"
              onClick={() => setShareBox(!shareBox)}
            >
              Share
            </button>
          </motion.div>
          {shareBox && (
            <div className="absolute z-50 left-0 md:left-10">
              <ShareSocialMedia url={shareUrl} title={shareTitle} />
            </div>
          )}
        </div>
        <div className=" mt-16 md:mt-10">
          <div className="w-auto lg:w-[550px] xl:w-[650px] pt-10">
            <img
              src={bannerImg}
              alt=""
              className="w-full h-full animate-bounceSlow ...  transition-all duration-500 hover:scale-105 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
