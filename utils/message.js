import { typeMsg } from "../lib/Elements/elements.js";
import { getApplicationData } from "../lib/Storage/storage.js";

const getMessageId = (date) => {
  return date.split("/").join("-");
};

const getSpecificDateMessages = (date) => {
  const { messages } = getApplicationData();
  return messages[date];
};

const setTextStyle = (tag, msg, startIndex, endIndex) => {
  const charArr = msg.split("");

  charArr.splice(startIndex, 0, `<${tag}>`);
  charArr.splice(endIndex + 1, 0, `</${tag}>`);

  typeMsg.value = charArr.join("");
};

export { getMessageId, getSpecificDateMessages, setTextStyle };
