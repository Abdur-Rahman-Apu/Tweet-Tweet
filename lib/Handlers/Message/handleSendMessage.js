import { getMessageLength } from "../../../utils/message.js";
import selectElem from "../../../utils/selectElem.js";
import { typeMsg } from "../../Elements/elements.js";
import { hideSelectMessageAtInput } from "../../Messages/selectMessageAtInput.js";
import sendMessage from "../../Messages/sendMessage.js";
import { setCountChar } from "../../UI/messages.js";

// To send message, we have two way - message without reply and message with reply
export default function handleSendMessage(e) {
  const replyMsgId = e.currentTarget.dataset.reply;

  const message = typeMsg.value;

  // without reply message
  if (message && replyMsgId === "null") {
    sendMessage(message);
  }

  // if reply message is present, then get that message, send and hide the selected reply message
  if (message && replyMsgId !== "null") {
    const replyMsg = selectElem(
      `#${replyMsgId} .message-text .text`
    ).textContent;

    sendMessage(message, { replyMsg, replyMsgId });

    hideSelectMessageAtInput(false);
  }

  setCountChar(getMessageLength());
}
