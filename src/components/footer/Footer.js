import React from "react";

function Footer() {
  return (
    <div>
      <div className=" bg-[#333333]">
        <div className="max-w-2xl mx-auto text-white py-10">
          <div className="text-center">
            <h3 className="text-3xl mb-3"> DOWNLOAD OUR APP </h3>
            <p> Order and reserve online with 40% DISCOUNT </p>
            <div className="flex justify-center my-10">
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2 cursor-pointer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200 ">Download on </p>
                  <p className="text-sm md:text-base"> Google Play Store </p>
                </div>
              </div>
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2 cursor-pointer">
                <img
                  src="https://www.freeiconspng.com/thumbs/apple-logo-icon/apple-icon-18.png"
                  className="w-7 md:w-8 "
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Apple Store </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400 cursor-pointer">
            <div>
              <p className="order-2 md:order-1 mt-8 md:mt-0 ">
                <span className="px-2  hover:text-white hover:font-bold">
                  &copy; 2023 City Coffee
                </span>
                <span className="px-2 border-l hover:text-white hover:font-bold">
                  All Right Reserved
                </span>
              </p>
            </div>
            <div className="order-1 md:order-2">
              <span className="px-2  hover:text-white hover:font-bold">
                About us
              </span>
              <span className="px-2 border-l hover:text-white hover:font-bold">
                Contact us
              </span>
              <span className="px-2 border-l  hover:text-white hover:font-bold">
                Privacy Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
