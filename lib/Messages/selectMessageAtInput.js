import { setStyle, setText } from "../../utils/DomOperations.js";
import { getMessageLength } from "../../utils/message.js";
import {
  editBtn,
  editIcon,
  replyIcon,
  selectMessageAtInput,
  selectMessageText,
  sendBtn,
  typeMsg,
} from "../Elements/elements.js";
import { setCountChar } from "../UI/messages.js";

// display selected message into the UI
const showSelectMessageAtInput = (targetElm, isEdit) => {
  const msgBody = targetElm.closest(".message-body");

  const messageId = msgBody.id;

  const msgElm = msgBody.querySelector(".message-text .text");

  const message = msgElm.textContent;

  // if in edit mode, then insert existing message into the input box
  isEdit && (typeMsg.value = msgElm.textContent);

  // focus on the input box
  typeMsg.focus();

  // show which message is trying to edit
  setText(selectMessageText, message);
  setStyle(selectMessageAtInput, { display: "flex" });

  // add a flag so that jump onto the original message
  selectMessageAtInput.dataset.jump = messageId;

  return messageId;
};

// hide selected message input
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
  // remove data attr from the send btn for reply message
  sendBtn.dataset.reply = null;

  //update char count
  setCountChar(getMessageLength());
};

// message selected for editing
const selectMessageAtInputForEdit = (targetElm) => {
  // hide reply icon and visible edit icon
  setStyle(replyIcon, { display: "none" });
  setStyle(editIcon, { display: "inline-block" });

  const messageId = showSelectMessageAtInput(targetElm, true);

  // update message length
  setCountChar(getMessageLength());

  // remove send button
  setStyle(sendBtn, { display: "none" });

  // add edit button and set a flag which will help to edit the message
  setStyle(editBtn, { display: "block" });
  editBtn.dataset.messageId = messageId;
};

// selected message for reply action
const selectMessageAtInputForReply = (targetElm) => {
  // hide edit icon and visible reply icon
  setStyle(editIcon, { display: "none" });
  setStyle(replyIcon, { display: "inline-block" });

  const messageId = showSelectMessageAtInput(targetElm, false);

  // set reply message id into send button
  sendBtn.dataset.reply = messageId;
};

export {
  hideSelectMessageAtInput,
  selectMessageAtInputForEdit,
  selectMessageAtInputForReply,
  showSelectMessageAtInput,
};
