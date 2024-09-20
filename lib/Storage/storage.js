import {
  getFromLocalStorage,
  setIntoLocalStorage,
} from "../../utils/storage.js";

const setInitialData = () => {
  const data = getFromLocalStorage("tweet") || { date: {}, setting: {} };
  setIntoLocalStorage("tweet", data);
};

export { setInitialData };
