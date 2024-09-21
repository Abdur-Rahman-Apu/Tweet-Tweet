import { setStyle } from "../../utils/DomOperations.js";
import { getMessageLength } from "../../utils/message.js";
import { editBtn, sendBtn, typeMsg } from "../Elements/elements.js";
import { setCountChar } from "../UI/messages.js";

export default function editMessage(targetElm) {
  console.log(targetElm.closest(".message-body"), "edit message");

  const msgBody = targetElm.closest(".message-body");

  const msgElm = msgBody.querySelector(".message-text p");

  console.log(msgElm, "message elm");

  typeMsg.value = msgElm.textContent;
  console.log(typeMsg.value);
  console.log(typeMsg.value.length);

  // update message length
  setCountChar(getMessageLength(typeMsg.value));

  // remove send button
  setStyle(sendBtn, { display: "none" });

  // add edit button
  setStyle(editBtn, { display: "block" });
}
