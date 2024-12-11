import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../assets/images/cc-logo.png";
import { motion } from "motion/react";

function Footer() {
  return (
    <div className="px-6 md:px-20 border-t dark:border-t dark:border-gray-700">
      <Link to={"/"} className="logo">
        <motion.h1
          className="mt-3 mb-6 text-3xl font-bold text-[#0F925C] dark:text-white text-center md:text-left "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#012D74] dark:text-[#0F925C]">Crypto</span>{" "}
          Tracker
        </motion.h1>
      </Link>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 text-center md:text-left  text-gray-900 dark:text-gray-300 mt-4 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="item-one">
          <h3 className="text-2xl font-bold text-[#3A80E9]">Info</h3>
          <ul className="text-sm mt-2">
            <li className="hover:text-[#3A80E9]  cursor-pointer transition-all duration-200 pb-1">
              About Us
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              F&Q
            </li>
            <li className="hover:text-[#3A80E9]cursor-pointer transition-all duration-200 pb-1">
              Blog
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              Free Schedule
            </li>
            <li className="hover:text-[#3A80E9]cursor-pointer transition-all duration-200 pb-1">
              Bug Bounty
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              Reviews
            </li>
          </ul>
        </div>
        <div className="item-two">
          <h3 className="text-2xl font-bold text-[#3A80E9]">Exchange</h3>
          <ul className="text-sm mt-2">
            <li className="hover:text-[#3A80E9]  cursor-pointer transition-all duration-200 pb-1">
              Trading
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              Earning
            </li>
            <li className="hover:text-[#3A80E9]cursor-pointer transition-all duration-200 pb-1">
              Launchpad
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              Buy Crypto
            </li>
            <li className="hover:text-[#3A80E9]cursor-pointer transition-all duration-200 pb-1">
              Apply for Listing
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              Apply for IEO
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              Apply for IDO
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              Airdrop
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              Referral Games
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              Referral Program
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              Trading Competition
            </li>
          </ul>
        </div>
        <div className="item-three">
          <h3 className="text-2xl font-bold text-[#3A80E9]">Legal</h3>
          <ul className="text-sm mt-2">
            <li className="hover:text-[#3A80E9]  cursor-pointer transition-all duration-200 pb-1">
              Terms Of Use
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              Privacy Policy
            </li>
            <li className="hover:text-[#3A80E9]cursor-pointer transition-all duration-200 pb-1">
              AML Policy
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              Delinting Policy
            </li>
          </ul>
        </div>
        <div className="item-four">
          <h3 className="text-2xl font-bold text-[#3A80E9]">Currency Pairs</h3>
          <ul className="text-sm mt-2">
            <li className="hover:text-[#3A80E9]  cursor-pointer transition-all duration-200 pb-1">
              ABBC to BTC
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              ARK to BTC
            </li>
            <li className="hover:text-[#3A80E9]cursor-pointer transition-all duration-200 pb-1">
              ARMR to BTC
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              AYA to BTC
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              BAT to USD
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              BAT to USDT
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              BCH to BTC
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              BCH to USDT
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              BCMC1 to ETH
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              BNB to BTC
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              BNB to ETH
            </li>
          </ul>
        </div>
        <div className="item-five">
          <h3 className="text-2xl font-bold text-[#3A80E9]">Crypto</h3>
          <ul className="text-sm mt-2">
            <li className="hover:text-[#3A80E9]  cursor-pointer transition-all duration-200 pb-1">
              Bitcoin
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              Ethereum
            </li>
            <li className="hover:text-[#3A80E9]cursor-pointer transition-all duration-200 pb-1">
              Tether US
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              Binance Coin
            </li>
            <li className="hover:text-[#3A80E9]cursor-pointer transition-all duration-200 pb-1">
              Stellar
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              ChainLink
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              Tron
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              NEO
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              Ethereum Classic
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              NEM
            </li>
            <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
              Waves
            </li>
          </ul>
        </div>
        <div className="item-six">
          <div className="">
            <h3 className="text-2xl font-bold text-[#3A80E9]">Support</h3>
            <ul className="text-sm mt-2">
              <li className="hover:text-[#3A80E9]  cursor-pointer transition-all duration-200 pb-1">
                Submit request
              </li>
              <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
                t.me/p2p3prp4_io
              </li>
              <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
                support.cryptoapp@gmail.com
              </li>
              <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
                API
              </li>
            </ul>
          </div>
          <div className="mt-3">
            <h3 className="text-2xl font-bold text-[#3A80E9]">Contact</h3>
            <ul className="text-sm mt-2">
              <li className="hover:text-[#3A80E9]  cursor-pointer transition-all duration-200 pb-1">
                @Listing_on_P2PBP5P6
              </li>
              <li className="hover:text-[#3A80E9] cursor-pointer transition-all duration-200 pb-1">
                cryptoapp@.com
              </li>
              <li className="hover:text-[#3A80E9]cursor-pointer transition-all duration-200 pb-1">
                Verity our represent.
              </li>
              <div className="social my-3">
                <ul className="flex gap-1.5 justify-center flex-wrap md:flex-nowrap items-center md:justify-start md:items-start">
                  <li className="border border-gray-400 p-1 rounded-sm hover:scale-105 transition-all duration-200">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin color="#0077B5" size="25" />
                    </a>
                  </li>
                  <li className="border border-gray-400 p-1 rounded-sm hover:scale-105 transition-all duration-200">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaGithub size="25" />
                    </a>
                  </li>
                  <li className="border border-gray-400 p-1 rounded-sm hover:scale-105 transition-all duration-200">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaFacebook color="#1877F2" size="25" />
                    </a>
                  </li>
                  <li className="border border-gray-400 p-1 rounded-sm hover:scale-105 transition-all duration-200">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaInstagram color="#E1306C" size="25" />
                    </a>
                  </li>

                  <li className="border border-gray-400 p-1 rounded-sm hover:scale-105 transition-all duration-200">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaXTwitter size="25" />
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="text-center pb-4 font-outfit text-sm text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p>©copyright all reserved cryptotracker.com</p>
      </motion.div>
    </div>
  );
}

export default Footer;
