import React from "react";
import coffee from "../images/coffee.jpg";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="contact-img ">
          <img
            src={coffee}
            alt=""
            className="contact-img h-[60vh] w-[100vw]
            "
          />
        </div>
        <h2 className="text-center text-3xl mt-20">
          WELCOME TO THE CITY COFFEE{" "}
        </h2>
        <div className="flex max-w-[1024px] w-[90%] border mx-auto text-[16px] p-4 m-20 bg-[#eee] shadow-lg">
          <div className="contact w-[55%] p-4 m-4 ">
            <h2>CONTACT</h2>
            <h2>Hamm</h2>
            <p>
              Greven weg 15 <br /> 20537 Hamburg <br />
              +4915213331433 <br /> city.cafe22@yahoo.com
            </p>
            <h2>Hafen City</h2>
            <p>
              Stein Strasse 19 <br /> 20537 Hamburg <br />
              +4915213331433 <br /> city.cafe22@yahoo.com
            </p>
          </div>
          <div className="openingHours flex flex-col items-center p-4 m-4">
            <h2 className=" ">OPENING HOURS</h2>
            <p>
              <span>Monday</span>
              <br />
              09:00 – 21:00
              <br />
              <span>Tuesday</span>
              <br />
              09:00 – 21:00
              <br />
              <span>Wednesday</span>
              <br />
              09:00 – 21:00
              <br />
              <span>Thursday</span>
              <br />
              09:00 – 21:00
              <br />
              <span>Friday</span>
              <br />
              09:00 – 21:00
              <br />
              <span>Saturday</span>
              <br />
              09:00 – 23:00
              <br />
              <span>Sunday</span>
              <br />
              09:00 – 23:00
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
