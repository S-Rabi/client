import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className=" mx-auto p-[10px]">
      <div className="my-20">
        <h1 className="h1  ml-40">
          WELCOME TO THE <br />
          <span> CITY CAFE AND COFFEE SHOP </span>
          <br />
        </h1>
        <h4 className="ml-40">Our special from Kenya and Indonesia </h4>
        <h2 className="h2 ml-40">Quality Passion Transparency</h2>
      </div>
      <div className=" menu-card p-2 ">
        <div className="card-container">
          <img
            className="img"
            src="https://st2.depositphotos.com/4135663/9538/i/600/depositphotos_95385604-stock-photo-many-cups-of-coffee-on.jpg"
            alt=""
          />
        </div>
        <div className="text-container">
          <h2 className="text-h2 font-bold	">BEVRAGES</h2>
          <Link to="bevrages">
            <button className="btn py-4 px-4 ">OUR BEVRAGES</button>
          </Link>
        </div>
      </div>
      <div className=" menu-card menu-card2 p-2  ">
        <div className="text-container">
          <h2 className="text-h2 font-bold	">DESSERT</h2>
          <Link to="dessert">
            <button className="btn py-4 px-4 ">OUR DESSERT</button>
          </Link>
        </div>
        <div className="card-container">
          <img
            className="img"
            src="https://staticfanpage.akamaized.net/wp-content/uploads/sites/22/2022/06/LINK-TRAFFIC-18-1200x675.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
