import { setStyle } from "../../../utils/DomOperations.js";
import selectElem from "../../../utils/selectElem.js";
import { deleteMessageFromTheStorage } from "../../Storage/storage.js";
import { displayMessages } from "../../UI/messages.js";

// Delete a message
export default function handleDeleteMessage(e) {
  const targetElm = e.target;
  const messageId = targetElm.dataset.messageId;

  const msgTextElm = selectElem(`#${messageId} .message-text .text`);

  msgTextElm.textContent = "Message Deleted Successfully";

  setStyle(msgTextElm, { color: "gray" });

  // remove data from the storage
  setTimeout(() => {
    deleteMessageFromTheStorage(messageId);
    displayMessages();
  }, 1000);
}
