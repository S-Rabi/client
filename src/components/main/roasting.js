import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../header/Navbar";
function Roasting() {
  return (
    <div>
      <Navbar />
      <div className="top-section flex flex-col justify-center items-center ">
        <img
          className="w-[100vw] h-[40vh]"
          src="https://www.nescafe.com/gb/sites/default/files/coffee-roasting-header-desktop.jpg"
          alt=""
        />
        <div className=" flex flex-col justify-center items-center p-4 m-4 max-w-screen-lg">
          <h3 className="h3 text-xl font-bold p-4">Our ROASTING</h3>
          <p className="text-s p-4">
            We are looking for selected beans for you from the best growing
            areas in the world. In every coffee you can taste where it is at
            home: the soil, climate and altitude give it a very individual
            aroma. The gentle processing of the raw beans in their country of
            origin also influences the quality, which is why we only work with
            partners we can absolutely trust.
          </p>
        </div>
      </div>
      <div className="main-section flex">
        <img
          className="roasting-img w-[40%]"
          src="https://media.istockphoto.com/id/922815968/id/foto/biji-kopi-dituangkan-dari-mesin-pemanggangan-kopi.jpg?s=612x612&w=0&k=20&c=za0OhqsgU963TkRYHogi_QDtEWaSNe5xZaJIrtXFIWM="
        />
        <div className="roasting-text w-[40%] p-4 mx-auto flex flex-col  justify-center ">
          <h4 className=" text-xl font-bold p-4">WHAT WE PAY ATTENTION TO</h4>
          <h6 className=" text-l font-bold p-2">Green coffee selection</h6>
          <p>
            In every coffee you can taste where it is at home: the soil, climate
            and altitude give it a very individual aroma.
          </p>
          <hr />
          <h6 className=" text-l font-bold p-2">
            Sustainable cultivation & fair trade
          </h6>
          <p>
            When selecting our green coffee, the coffee grows in harmony with
            nature. We support social projects in the countries of origin.
          </p>
          <hr />
          <h6 className=" text-l font-bold p-2">Roasting</h6>
          <p>
            A good coffee can unfold up to 800 aromas - we elicit its special
            profile through our own careful roasting.
          </p>
          <hr />
          <h6 className=" text-l font-bold p-2">Profile</h6>
          <p>
            Not all coffee is the same! We adapt our roasts to the different
            varieties to create a unique taste.
          </p>
          <hr />
        </div>
      </div>
      <div className="bottom-section p-2 text-white ">
        <div className="h-full ">
          <div className="container mx-auto  lg:px-20">
            <div className="grid grid-cols-3 h-full pb-40">
              <div className="border-r border-gray-300 mx-3 lg:pl-20">
                <div className=" py-10 pb-3 mt-72 h-4/6 relative bg-[#999999] group hover:bg-[#333333] cursor-pointer transition ease-out duration-300">
                  <div className="px-7 mt-20">
                    <h1 className="text-3xl font-bold ">01.</h1>
                    <h2 className="text-1xl mt-4 font-bold">Light Roast</h2>
                    <p className="mt-2 opacity-60 group-hover:opacity-70 ">
                      This roast emphasizes sharp acids, floral to fruity notes
                      and a light body. These coffees bring with them a light
                      yet multi-faceted cup. Varieties: Nicaragua, Rwanda,
                      Colombia, Kenya
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-r border-gray-300 mx-3 lg:pl-20">
                <div className=" py-10  pb-3 mt-32 h-4/6 relative bg-[#666666] group hover:bg-[#333333] cursor-pointer transition ease-out duration-300">
                  <div className="px-7 mt-20">
                    <h1 className="text-3xl font-bold ">02.</h1>
                    <h2 className="text-1xl mt-4 font-bold">Medium Roast</h2>
                    <p className="mt-2 opacity-60 group-hover:opacity-70 ">
                      This roast emphasizes a balanced body, full-bodied and
                      fine sweet aromas. You get nuances of nuts, chocolate and
                      fine spice from these coffees. Varieties: Guatemala,
                      Burundi, Honduras{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-r border-gray-300 mx-3 lg:pl-20">
                <div className=" py-10 pb-3 mt-5 h-4/6 relative bg-[#333333] group hover:bg-[#111111] cursor-pointer transition ease-out duration-300">
                  <div className="px-7 mt-5">
                    <h1 className="text-3xl font-bold ">03.</h1>
                    <h2 className="text-1xl mt-4 font-bold">
                      Espresso Roasting
                    </h2>
                    <p className="mt-2 opacity-60 group-hover:opacity-70 ">
                      Our espresso roasts are adapted in such a way that the
                      longer roasting time breaks down unpleasant chlorogenic
                      acids in order to make the espressos more digestible. It
                      is roasted long enough to elicit multifaceted aromas from
                      the coffee and to maintain a balanced body without
                      emphasizing burnt aromas.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Roasting;
