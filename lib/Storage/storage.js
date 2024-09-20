import {
  getFromLocalStorage,
  setIntoLocalStorage,
} from "../../utils/storage.js";

const setInitialData = () => {
  const data = getFromLocalStorage("tweet") || {
    messages: {},
    setting: { profilePic: "./assets/images/unknown-avatar.jpeg" },
  };
  setIntoLocalStorage("tweet", data);
};

const getApplicationData = () => {
  const data = getFromLocalStorage("tweet");
  return data;
};

export { getApplicationData, setInitialData };
