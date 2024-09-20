import { getApplicationData } from "../lib/Storage/storage.js";

const getMessageId = (date) => {
  return date.split("/").join("-");
};

const getSpecificDateMessages = (date) => {
  const { messages } = getApplicationData();
  return messages[date];
};

export { getMessageId, getSpecificDateMessages };
