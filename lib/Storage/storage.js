import { getToday } from "../../utils/getDate.js";
import {
  getFromLocalStorage,
  setIntoLocalStorage,
} from "../../utils/storage.js";

// check empty date and remove the date
const removeEmptyMessageDateExceptToday = (data, todayDate) => {
  const allMessages = data.messages;

  for (const date in allMessages) {
    if (date !== todayDate) {
      data.messages[date].length === 0 && delete data.messages[date];
    }
  }
  return data;
};

// set initial data into the storage
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
    search: { id: [], text: null },
  };

  const isTodayDatePresentInStorage = dateFormat in data?.messages;

  !isTodayDatePresentInStorage && (data["messages"][dateFormat] = []);

  removeEmptyMessageDateExceptToday(data, dateFormat);

  setIntoLocalStorage("tweet", data);
};

// get application data from the storage
const getApplicationData = () => {
  const data = getFromLocalStorage("tweet");
  return data;
};

// set application data into the storage
const setApplicationData = (data) => {
  setIntoLocalStorage("tweet", data);
};

// set font style into the storage
const setFontStyle = (style = { startIndex: null, endIndex: null }) => {
  const data = getApplicationData();
  data.fontStyle = style;
  setIntoLocalStorage("tweet", data);
};

// extract message id and message date
const extractMessageIdWithMessageDate = (elmMessageId) => {
  const elmMessageIdInArr = elmMessageId.split("-").slice(1);

  const messageId = elmMessageIdInArr.join("-");

  const messageDate = elmMessageIdInArr.slice(0, -1).join("/");

  return { messageId, messageDate };
};

// update message into storage
const updateMessage = ({ elmMessageId, newMessage, isEdit, reactIcon }) => {
  const { messageId, messageDate } =
    extractMessageIdWithMessageDate(elmMessageId);

  const data = getApplicationData();

  const messages = data.messages[messageDate].map((message) => {
    // if message id matched, then set new message
    if (message.id === messageId) {
      if (isEdit) {
        return { ...message, text: newMessage, isEdited: true };
      } else {
        // if react icon changed
        const isSameIcon = message?.reactIcon === reactIcon;

        return { ...message, reactIcon: isSameIcon ? null : reactIcon };
      }
    }
    // otherwise return previous message
    return message;
  });

  data.messages[messageDate] = messages;

  setApplicationData(data);
};

// update edit messages into the storage for editing mode
const editSpecificMessageIntoStorage = (elmMessageId, newMessage) => {
  updateMessage({ elmMessageId, newMessage, isEdit: true, reactIcon: null });
};

// set react icon into the messages
const setReactIconIntoSpecificMessage = (elmMessageId, icon) => {
  updateMessage({ elmMessageId, reactIcon: icon });
};

// delete message from the storage
const deleteMessageFromTheStorage = (elmMessageId) => {
  const { messageId, messageDate } =
    extractMessageIdWithMessageDate(elmMessageId);

  const data = getApplicationData();

  const messages = data.messages[messageDate].filter(
    (msg) => msg.id !== messageId
  );

  data.messages[messageDate] = messages;

  setApplicationData(data);
};

// update search related info into the storage
const updateSearchMessagesIntoStorage = ({
  action,
  messagesId,
  searchText,
}) => {
  const data = getApplicationData();

  if (action === "update") {
    // trying to update the search value of the storage
    if (messagesId.length) {
      // if messages id has data
      data.search.id = messagesId;
      data.search.text = searchText;
    } else {
      // if messages id array is empty
      data.search = { id: [], text: "" };
    }
  }

  if (action === "clear") {
    // Remove existing search related info
    data.search = { id: [], text: "" };
  }

  setApplicationData(data);
};

export {
  deleteMessageFromTheStorage,
  editSpecificMessageIntoStorage,
  getApplicationData,
  setApplicationData,
  setFontStyle,
  setInitialData,
  setReactIconIntoSpecificMessage,
  updateSearchMessagesIntoStorage,
};
