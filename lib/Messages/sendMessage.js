import { getToday } from "../../utils/getDate.js";
import {
  getSpecificDateMessages,
  setSpecificDateMessagesIntoStorage,
} from "../../utils/message.js";
import { typeMsg } from "../Elements/elements.js";
import { displayMessages } from "../UI/messages.js";

export default function sendMessage(message) {
  console.log(message, "send message");

  const { day, month, year, hours, minutes, dayOrNight } = getToday();

  const date = `${month}/${day}/${year}`;

  const idFormatDate = `${month}-${day}-${year}`;

  console.log(date, "date");

  const todayMessages = getSpecificDateMessages(date);

  console.log(todayMessages, "today messages");

  const lastMessageIdFull = todayMessages[todayMessages.length - 1]?.id ?? "0";

  console.log(lastMessageIdFull, "last message id full");
  const lastMessageId = lastMessageIdFull.includes("message")
    ? lastMessageIdFull.slice(-1)
    : lastMessageIdFull;

  const messageInfo = {
    id: `${idFormatDate}-${+lastMessageId + 1}`,
    text: message,
    time: `${hours}:${minutes} ${dayOrNight}`,
    reactIcon: null,
    isEdited: false,
  };

  todayMessages.push(messageInfo);

  // set specific date data into storage
  setSpecificDateMessagesIntoStorage(date, todayMessages);

  // display messages
  displayMessages();

  typeMsg.value = null;
}
