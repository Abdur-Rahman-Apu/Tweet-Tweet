const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let dayOrNight = hours >= 12 ? "PM" : "AM";

  hours = hours > 12 ? hours - 12 : hours;

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");

  return {
    day,
    month,
    year,
    hours,
    minutes,
    dayOrNight,
  };
};

const isToday = (date) => {
  return new Date().toDateString() == new Date(date).toDateString();
};

// Fri, 20 Sep 2024
const dateUTCformat = (date) => {
  const utcFormat = date.toUTCstring();
  const timeStartIndex = utcFormat.search("00:00");
  const desiredFormat = utcFormat.slice(0, timeStartIndex);
  return desiredFormat;
};

export { dateUTCformat, getToday, isToday };
