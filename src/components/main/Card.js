import React from "react";
import { Link } from "react-router-dom";
function Card() {
  return (
    <div className="card-page">
      <div className="card max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="card-img"
          src="https://cdn.shopify.com/s/files/1/1008/8768/products/picture-in-picture4648118-coffee-mural_large.jpg?v=1614755035"
          alt=""
        />

        <div className="p-5 bg-[#eee]">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            RESERVATIONS
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Reservations are only possible on weekends or public holidays.
          </p>
          <Link to="/reservationForm">
            <button className="btn card-btn">BOOK HERE</button>
          </Link>
        </div>
      </div>
      <div className="card  max-w-sm  border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="card-img"
          src="https://ictcoffee.com/wp-content/uploads/2019/04/developing-deeper-flavors-during-coffee-roasting-process.jpg"
          alt=""
        />

        <div className="p-5  bg-[#eee]">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ROASTING
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            We roast freshly every day and with the utmost care.
          </p>

          <Link to="/roasting">
            <button className="btn card-btn">LEARN MORE</button>
          </Link>
        </div>
      </div>
      <div className=" card max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="card-img social-img"
          src="https://www.cpkahve.com/wp-content/uploads/2021/05/Anasayfa-gorsel-sunum-ve-urun-hazirlama.jpg"
          alt=""
        />

        <div className="p-5  bg-[#eee]">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            SOCIAL MEDIA
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Follow us on Instagram and Facebook.
          </p>
          <button className="btn card-btn socialMedia-facebook">
            FACEBOOK
          </button>
          <button className="btn card-btn socialMedia-instagram">
            INSTAGRAM
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
