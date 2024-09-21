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

const showSelectMessage = (messageId) => {
  // show which message is trying to edit
  setText(selectMessageText, typeMsg.value);
  setStyle(selectMessageAtInput, { display: "flex" });

  // add a flag so that jump onto the original message
  selectMessageAtInput.dataset.jump = messageId;
};

const hideSelectMessage = () => {
  // remove select message
  setText(selectMessageText, null);
  setStyle(selectMessageAtInput, { display: "none" });

  // remove the flag of jump in to the original message
  selectMessageAtInput.dataset.jump = null;

  // empty the message box
  typeMsg.value = null;

  //update char count
  setCountChar(getMessageLength());

  // remove edit button
  setStyle(editBtn, { display: "none" });

  // show send btn
  setStyle(sendBtn, { display: "block" });
};

export { hideSelectMessage, showSelectMessage };
