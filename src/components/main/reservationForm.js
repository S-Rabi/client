import React, { useState } from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
import "./main.css";

function ReservationForm() {
  const [valuet, setValue] = React.useState(dayjs("2022-02-22"));
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    number: "",
  });

  let name, value;

  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <Navbar />
      <h2 className="reservation-h2 mt-28 mb-20 text-[25px]	 text-center">
        WELCOME TO THE HAFEN CITY <br /> <span>CITY CAFE & COFFEE SHOP </span>
      </h2>

      <form className="reservationForm p-6 m-10 max-w-5xl h-fit mx-auto">
        <h2 className="mt-10 mb-4 mx-auto fw-bold text-[20px]">
          RESERVATION DETAILS
        </h2>
        <p className=" my-4 mx-auto text-[16px]">
          Almost there! Please enter your information below to complete the
          reservation.
        </p>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              value={user.name}
              onChange={handleInput}
              name="firstname"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#333333] peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#333333] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              value={user.lastName}
              onChange={handleInput}
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#333333] peer"
              placeholder=" "
              required
            />
            <label
              for="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#333333] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              value={user.email}
              onChange={handleInput}
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent  border-b-2 border-gray-300  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#333333] peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#333333] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              value={user.phone}
              onChange={handleInput}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#333333] peer"
              placeholder=" "
              required
            />
            <label
              for="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#333333] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-1 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <div class="flex items-center mb-4">
              <input id="checkbox-3" type="checkbox" value="" />
              <label for="checkbox-3" class="ml-2 text-sm ">
                I wish to receive special offers and communications from the
                restaurant via email and text
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input id="checkbox-3" type="checkbox" value="" />
              <label for="checkbox-3" class="ml-2 text-sm ">
                I agree to the
                <a
                  href="#"
                  class="text-blue-600 hover:underline dark:text-blue-500"
                >
                  &nbsp; terms and conditions
                </a>
                .
              </label>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6 ">
          <div className="grid md:grid-cols-1 md:gap-6 border-1 border-black-900 rounded relative z-0 w-full mb-6 group h-14">
            <input
              type="number"
              value={user.number}
              onChange={handleInput}
              name="number"
              id="number"
              className="block py-2.5 px-2 w-full text-md text-black-900 bg-transparent  rounded border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:outline-none focus:border-b-[#006ee6] peer"
              placeholder=" "
              required
            />
            <label
              id="number"
              for="number"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#333333]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              NUMBER OF GUESTS
            </label>
          </div>
          <div className="grid md:grid-cols-1 md:gap-6 ">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="DateTimePicker"
                value={valuet}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="flex justify-end ">
          <button
            type="submit"
            className=" submit btn bg-[#048c7f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg font-bold text-m lg:w-[150px]  md:w-auto sm:w-auto px-5 py-2.5 text-center "
          >
            SUBMIT
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default ReservationForm;
