const getToday = () => {
  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date();
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const week = weeks[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let dayOrNight = hours >= 12 ? "PM" : "AM";

  hours = hours > 12 ? hours - 12 : hours;

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");

  return {
    week,
    day,
    month,
    year,
    hours,
    minutes,
    dayOrNight,
  };
};

const isToday = (date) => {
  return new Date().toString() === date.toString();
};

export { getToday, isToday };
