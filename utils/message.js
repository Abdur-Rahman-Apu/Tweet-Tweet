import { typeMsg } from "../lib/Elements/elements.js";
import {
  getApplicationData,
  setApplicationData,
} from "../lib/Storage/storage.js";

const getMessageId = (date) => {
  return date.split("/").join("-");
};

const getSpecificDateMessages = (date) => {
  const { messages } = getApplicationData();
  console.log(date, "getSpecificDateMessages");
  console.log(messages, "getSpecificDateMessages");
  return messages[date];
};

const setSpecificDateMessagesIntoStorage = (date, messages) => {
  const data = getApplicationData();
  data["messages"][date] = messages;
  setApplicationData(data);
};

const setTextStyle = (tag, msg, startIndex, endIndex) => {
  const charArr = msg.split("");

  charArr.splice(startIndex, 0, `<${tag}>`);
  charArr.splice(endIndex + 1, 0, `</${tag}>`);

  typeMsg.value = charArr.join("");
};

const getMessageLength = () => {
  return Array.from(typeMsg.value).length;
};

export {
  getMessageId,
  getMessageLength,
  getSpecificDateMessages,
  setSpecificDateMessagesIntoStorage,
  setTextStyle,
};
