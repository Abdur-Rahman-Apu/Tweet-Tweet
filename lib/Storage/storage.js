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
    setting: { profilePic: "./assets/images/unknown-avatar.jpeg" },
  };

  const isTodayDatePresentInStorage = dateFormat in data?.messages;

  !isTodayDatePresentInStorage && (data["messages"][dateFormat] = []);

  setIntoLocalStorage("tweet", data);
};

const getApplicationData = () => {
  const data = getFromLocalStorage("tweet");
  return data;
};

export { getApplicationData, setInitialData };
