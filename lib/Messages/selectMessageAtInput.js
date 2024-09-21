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

const showSelectMessageAtInput = (targetElm, isEdit) => {
  console.log(targetElm.closest(".message-body"), "edit message");

  const msgBody = targetElm.closest(".message-body");

  const messageId = msgBody.id;
  console.log(messageId);

  const msgElm = msgBody.querySelector(".message-text p");

  console.log(msgElm, "message elm");

  const message = msgElm.textContent;

  isEdit && (typeMsg.value = msgElm.textContent);
  console.log(typeMsg.value);
  console.log(typeMsg.value.length);

  // show which message is trying to edit
  setText(selectMessageText, message);
  setStyle(selectMessageAtInput, { display: "flex" });

  // add a flag so that jump onto the original message
  selectMessageAtInput.dataset.jump = messageId;

  return messageId;
};

const hideSelectMessageAtInput = (isEdit) => {
  // remove select message
  setText(selectMessageText, null);
  setStyle(selectMessageAtInput, { display: "none" });

  // remove the flag of jump in to the original message
  selectMessageAtInput.dataset.jump = null;

  if (isEdit) {
    // empty the message box
    typeMsg.value = null;

    // remove edit button and flag of the edit button
    setStyle(editBtn, { display: "none" });
    editBtn.dataset.messageId = null;

    // show send btn
    setStyle(sendBtn, { display: "block" });
  }

  //update char count
  setCountChar(getMessageLength());
};

const selectMessageAtInputForEdit = (targetElm) => {
  const messageId = showSelectMessageAtInput(targetElm, true);

  //

  // update message length
  setCountChar(getMessageLength());

  // remove send button
  setStyle(sendBtn, { display: "none" });

  // add edit button and set a flag which will help to edit the message
  setStyle(editBtn, { display: "block" });
  editBtn.dataset.messageId = messageId;
};

const selectMessageAtInputForReply = (targetElm) => {
  console.log(targetElm.closest(".message-body"), "edit message");

  const msgBody = targetElm.closest(".message-body");

  const msgElm = msgBody.querySelector(".message-text p");

  const messageId = msgBody.id;
  console.log(messageId, msgElm.textContent);

  // console.log(msgElm, "message elm");

  // typeMsg.value = msgElm.textContent;
  // console.log(typeMsg.value);
  // console.log(typeMsg.value.length);

  showSelectMessageAtInput(targetElm, false);

  //

  // update message length
  // setCountChar(getMessageLength());

  // // remove send button
  // setStyle(sendBtn, { display: "none" });

  // // add edit button and set a flag which will help to edit the message
  // setStyle(editBtn, { display: "block" });
  // editBtn.dataset.messageId = messageId;
};

export {
  hideSelectMessageAtInput,
  selectMessageAtInputForEdit,
  selectMessageAtInputForReply,
  showSelectMessageAtInput,
};
