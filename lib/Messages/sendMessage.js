import { getToday } from "../../utils/getDate.js";
import {
  getSpecificDateMessages,
  setSpecificDateMessagesIntoStorage,
} from "../../utils/message.js";
import { typeMsg } from "../Elements/elements.js";
import { displayMessages } from "../UI/messages.js";

// handle send message
export default function sendMessage(message, reply) {
  const { day, month, year, hours, minutes, dayOrNight } = getToday();

  const date = `${month}/${day}/${year}`;

  const idFormatDate = `${month}-${day}-${year}`;

  const todayMessages = getSpecificDateMessages(date);

  const lastMessageIdFull = todayMessages[todayMessages.length - 1]?.id ?? "0";

  const lastMessageId = lastMessageIdFull.includes("-")
    ? lastMessageIdFull.slice(-1)
    : lastMessageIdFull;

  const messageInfo = {
    id: `${idFormatDate}-${+lastMessageId + 1}`,
    text: message,
    time: `${hours}:${minutes} ${dayOrNight}`,
    reactIcon: null,
    isEdited: false,
    reply: reply ? reply : { replyMsg: null, replyMsgId: null },
  };

  todayMessages.push(messageInfo);

  // set specific date data into storage
  setSpecificDateMessagesIntoStorage(date, todayMessages);

  // display messages
  displayMessages();

  typeMsg.value = null;
}
