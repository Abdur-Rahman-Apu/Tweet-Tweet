import selectElem from "../../../utils/selectElem.js";
import { typeMsg } from "../../Elements/elements.js";
import { hideSelectMessageAtInput } from "../../Messages/selectMessageAtInput.js";
import sendMessage from "../../Messages/sendMessage.js";

export default function handleSendMessage(e) {
  const replyMsgId = e.currentTarget.dataset.reply;

  console.log(replyMsgId, "replyMsgId");

  const message = typeMsg.value;

  if (message && !replyMsgId) {
    sendMessage(message);
  }

  if (message && replyMsgId) {
    const replyMsg = selectElem(`#${replyMsgId} .message-text p`).textContent;
    console.log(replyMsg, "reply msg");
    sendMessage(message, { replyMsg, replyMsgId });

    hideSelectMessageAtInput(false);
  }
}
