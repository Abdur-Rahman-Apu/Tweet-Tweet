import { setStyle, setText } from "../../utils/DomOperations.js";
import { getMessageLength } from "../../utils/message.js";
import {
  editBtn,
  selectMessageAtInput,
  selectMessageText,
  sendBtn,
  typeMsg,
} from "../Elements/elements.js";
import { setCountChar } from "../UI/messages.js";

export default function editMessage(targetElm) {
  console.log(targetElm.closest(".message-body"), "edit message");

  const msgBody = targetElm.closest(".message-body");

  const messageId = msgBody.id;
  console.log(messageId);

  const msgElm = msgBody.querySelector(".message-text p");

  console.log(msgElm, "message elm");

  typeMsg.value = msgElm.textContent;
  console.log(typeMsg.value);
  console.log(typeMsg.value.length);

  // show which message is trying to edit
  setText(selectMessageText, typeMsg.value);
  setStyle(selectMessageAtInput, { display: "flex" });

  // add a flag so that jump onto the original message
  selectMessageAtInput.dataset.jump = messageId;

  //

  // update message length
  setCountChar(getMessageLength(typeMsg.value));

  // remove send button
  setStyle(sendBtn, { display: "none" });

  // add edit button
  setStyle(editBtn, { display: "block" });
}
