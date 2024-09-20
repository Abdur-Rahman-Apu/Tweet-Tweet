/*
setIntoLocalStorage: Set something into local storage
Parameter: key and value
*/
const setIntoLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/*
getFromLocalStorage: Get something from the local storage
Parameter: key 
*/
const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export { getFromLocalStorage, setIntoLocalStorage };
