import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on the scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="flex justify-center items-center w-12 h-12 rounded-full fixed bottom-5 right-8 z-50 border-2 border-[#61C96F] "
        >
          <IoIosArrowUp size={35} color="#F94141" />
        </button>
      )}
    </div>
  );
}

export default BackToTop;
