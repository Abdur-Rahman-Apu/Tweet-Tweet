import { setStyle } from "../../../utils/DomOperations.js";
import selectElem from "../../../utils/selectElem.js";
import { editBtn, sendBtn, typeMsg } from "../../Elements/elements.js";
import { hideSelectMessageAtInput } from "../../Messages/selectMessageAtInput.js";
import { editSpecificMessageIntoStorage } from "../../Storage/storage.js";
import { displayMessages } from "../../UI/messages.js";

// Edit button is triggered
export default function handleEditMessage(e) {
  const messageId = e.currentTarget.dataset.messageId;

  const msgElm = selectElem(`#${messageId}`);

  const OriginalMessage = msgElm.querySelector(
    ".message-text .text"
  ).textContent;

  const editedMessage = typeMsg.value;

  //   checking new message entered
  if (OriginalMessage !== editedMessage) {
    editSpecificMessageIntoStorage(messageId, editedMessage);

    // display messages into the UI
    displayMessages();

    // show edited title beside the message
    selectElem(`#${messageId}`)
      .querySelector(".edit-msg")
      .classList.remove("hide");

    // empty message input box
    typeMsg.value = "";

    // remove date attribute from the edit button
    editBtn.dataset.messageId = null;

    // hide the edit button
    setStyle(editBtn, { display: "none" });

    // show the edit button
    setStyle(sendBtn, { display: "block" });
  }

  hideSelectMessageAtInput(true);
}
