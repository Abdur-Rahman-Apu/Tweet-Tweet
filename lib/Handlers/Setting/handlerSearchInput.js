import {
  getApplicationData,
  setApplicationData,
  updateSearchMessagesIntoStorage,
} from "../../Storage/storage.js";
import { displayMessages } from "../../UI/messages.js";

const getAllMessagesIntoSingleVariable = (data) => {
  // messages are stored as obj where key is date
  const allMessagesObj = data.messages;

  // all dates message need to be stored into single array
  let messages = [];

  //   traverse into messages obj so that we can extract all messages into single variable
  for (const date in allMessagesObj) {
    const specificDateMessages = allMessagesObj[date];
    messages = [...messages, ...specificDateMessages];
  }

  return messages;
};

// get messages id which are containing search text
const filterMatchedMessagesId = (messages, searchText) => {
  const matchMessageId = messages.reduce((matchMsgArr, currentMessage) => {
    if (currentMessage.text.includes(searchText)) {
      matchMsgArr.push(currentMessage.id);
    }

    return matchMsgArr;
  }, []);

  return matchMessageId;
};

const highlightMatchChar = (matchMessageId, searchText, replaceText) => {
  const data = getApplicationData();
  // Regular expression needed for replace text dynamically
  const regex = new RegExp(searchText, "g");

  for (const date in data.messages) {
    const specificDateMessages = data.messages[date].map((message) => {
      if (matchMessageId.includes(message.id)) {
        message.text = message.text.replaceAll(regex, replaceText);
      }
      return message;
    });

    data.messages[date] = specificDateMessages;
  }

  console.log(data, "updated data", searchText, replaceText);

  //   update into storage
  setApplicationData(data);
};

const removeHighlightMatchChar = () => {
  const data = getApplicationData();
  const matchMessagesId = data.search.id;

  if (matchMessagesId.length) {
    const searchText = `<mark>${data.search.text}</mark>`;
    const replaceText = data.search.text;
    highlightMatchChar(matchMessagesId, searchText, replaceText);
  }
};

// search handler to perform search within the message
export default function handlerSearchInput(e) {
  // remove previously highlighted character
  removeHighlightMatchChar();

  // clear search message id arr into the storage
  updateSearchMessagesIntoStorage({
    action: "clear",
  });

  console.log(e.target.value);
  const searchText = e.target.value;

  if (searchText) {
    const data = getApplicationData();

    const messages = getAllMessagesIntoSingleVariable(data);
    const matchMessageId = filterMatchedMessagesId(messages, searchText);

    // update matched messages id into the storage
    updateSearchMessagesIntoStorage({
      action: "update",
      messagesId: matchMessageId,
      searchText,
    });

    // highlight match text
    const replaceText = `<mark>${searchText}</mark>`;
    highlightMatchChar(matchMessageId, searchText, replaceText);

    console.log(messages, "messages into single variable");
  }
  // display into the UI
  displayMessages();
}
