import { typeMsg } from "../lib/Elements/elements.js";
import {
  getApplicationData,
  setApplicationData,
} from "../lib/Storage/storage.js";

// To get message id: Just make the date into 9-2-2024 format
const getMessageId = (date) => {
  return date.split("/").join("-");
};

// get messages of the specific date
const getSpecificDateMessages = (date) => {
  const { messages } = getApplicationData();
  return messages[date];
};

// set specific date messages and store into the storage
const setSpecificDateMessagesIntoStorage = (date, messages) => {
  const data = getApplicationData();
  data["messages"][date] = messages;
  setApplicationData(data);
};

/*
setTextStyle: To make the text bold, italic, underline and line through

Parameters:
-----------
tag: b,i,u,s
msg: select message
startIndex: select message's start index
endIndex: select message's end index
*/
const setTextStyle = (tag, msg, startIndex, endIndex) => {
  const charArr = msg.split("");

  charArr.splice(startIndex, 0, `<${tag}>`);
  charArr.splice(endIndex + 1, 0, `</${tag}>`);

  typeMsg.value = charArr.join("");
};

// Obtain the input box message length
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
