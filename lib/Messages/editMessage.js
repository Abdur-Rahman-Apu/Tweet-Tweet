import { setStyle } from "../../utils/DomOperations.js";
import { getMessageLength } from "../../utils/message.js";
import { editBtn, sendBtn, typeMsg } from "../Elements/elements.js";
import { setCountChar } from "../UI/messages.js";
import { showSelectMessage } from "./selectMessage.js";

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

  showSelectMessage(messageId);

  //

  // update message length
  setCountChar(getMessageLength());

  // remove send button
  setStyle(sendBtn, { display: "none" });

  // add edit button
  setStyle(editBtn, { display: "block" });
}
