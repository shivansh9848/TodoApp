
import React from "react";

const Greeting = () => {
  const date = new Date();
  const hours = date.getHours();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[date.getMonth()];
  const today = `${date.getUTCDate()} ${month} ${date.getFullYear()}`;

  let greeting = "";

  if (hours >= 0 && hours < 12) {
    greeting = "Good morning";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good afternoon";
  } else if (hours >= 18 && hours < 21) {
    greeting = "Good evening";
  } else {
    greeting = "Good night";
  }

  return (
    <div className="py-7 px-6  mx-auto bg-purple-500">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-bold text-3xl md:text-4xl ">
          <span
            role="img"
            aria-label="Hand wave"
          >
            &#128075;
          </span>{" "}
          {greeting}
        </h1>
        <h1 className="text-white font-bold text-3xl md:text-4xl  md:w-64 cursor-pointer">
          TODO
        </h1>
        <div className="hidden md:block">
          <p className="text-white font-semibold text-lg">{today}</p>
        </div>
      </div>
      <div className="md:hidden mt-2">
        <p className="text-white font-semibold text-lg">{today}</p>
      </div>
    </div>
  );
};

export default Greeting;
