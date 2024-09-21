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

const editSpecificMessageIntoStorage = (elmMessageId, newMessage) => {
  console.log(elmMessageId, "message id");

  console.log(newMessage, "new message");

  const elmMessageIdInArr = elmMessageId.split("-").slice(1);
  const messageId = elmMessageIdInArr.join("-");

  console.log(messageId, "message id");
  console.log(elmMessageIdInArr, "in arr");
  const messageDate = elmMessageIdInArr.slice(0, -1).join("/");

  console.log(messageDate, "message date");
  const data = getApplicationData();

  console.log(data.messages[messageDate], "messages");

  const messages = data.messages[messageDate].map((message) => {
    // if message id matched, then set new message
    if (message.id === messageId) {
      return { ...message, text: newMessage, isEdited: true };
    }
    // otherwise return previous message
    return message;
  });

  console.log(messages, "new messages");

  data.messages[messageDate] = messages;

  setApplicationData(data);
};

export {
  editSpecificMessageIntoStorage,
  getApplicationData,
  setApplicationData,
  setFontStyle,
  setInitialData,
};
