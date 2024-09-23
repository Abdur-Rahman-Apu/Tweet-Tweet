import selectElem from "../../../utils/selectElem.js";
import { typeMsg } from "../../Elements/elements.js";
import { hideSelectMessageAtInput } from "../../Messages/selectMessageAtInput.js";
import sendMessage from "../../Messages/sendMessage.js";

// To send message, we have two way - message wihout reply and message with reply
export default function handleSendMessage(e) {
  const replyMsgId = e.currentTarget.dataset.reply;

  const message = typeMsg.value;

  // without reply message
  if (message && !replyMsgId) {
    sendMessage(message);
  }

  // if reply message is present, then get that message, send and hide the selected reply message
  if (message && replyMsgId) {
    const replyMsg = selectElem(`#${replyMsgId} .message-text p`).textContent;

    sendMessage(message, { replyMsg, replyMsgId });

    hideSelectMessageAtInput(false);
  }
}
