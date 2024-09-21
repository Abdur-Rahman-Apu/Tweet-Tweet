import { getToday } from "../../utils/getDate.js";
import {
  getFromLocalStorage,
  setIntoLocalStorage,
} from "../../utils/storage.js";

const setInitialData = () => {
  const { day, month, year } = getToday();

  const dateFormat = `${month}/${day}/${year}`;

  const data = getFromLocalStorage("tweet") || {
    messages: {},
    setting: {
      profilePic: "./assets/images/unknown-avatar.jpeg",
      bg: "./assets/images/chatbg/bg-1.jpg",
    },
    fontStyle: { startIndex: null, endIndex: null },
  };

  const isTodayDatePresentInStorage = dateFormat in data?.messages;

  !isTodayDatePresentInStorage && (data["messages"][dateFormat] = []);

  setIntoLocalStorage("tweet", data);
};

const getApplicationData = () => {
  const data = getFromLocalStorage("tweet");
  return data;
};

const setApplicationData = (data) => {
  setIntoLocalStorage("tweet", data);
};

const setFontStyle = (style = { startIndex: null, endIndex: null }) => {
  const data = getApplicationData();
  data.fontStyle = style;
  setIntoLocalStorage("tweet", data);
};

export { getApplicationData, setApplicationData, setFontStyle, setInitialData };
