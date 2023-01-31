import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const scrollFunction = () => {
    var mybutton = document.getElementById("back-to-top");
    if (mybutton != null) {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        mybutton.classList.add("block");
        mybutton.classList.remove("hidden");
      } else {
        mybutton.classList.add("hidden");
        mybutton.classList.remove("block");
      }
    }
  };

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div>
      <div
        onClick={topFunction}
        id="back-to-top"
        className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 right-5 h-9 w-9 text-center bg-primary text-white leading-9 cursor-pointer hover:bg-yellow hover:text-primary"
      >
        <i className="bx bx-up-arrow-alt"></i>
      </div>
    </div>
  );
};
export default ScrollToTop;
