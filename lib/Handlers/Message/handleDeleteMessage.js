import { setStyle } from "../../../utils/DomOperations.js";
import selectElem from "../../../utils/selectElem.js";
import { deleteMessageFromTheStorage } from "../../Storage/storage.js";
import { displayMessages } from "../../UI/messages.js";

export default function handleDeleteMessage(e) {
  console.log(e.target);
  console.log(e.currentTarget);

  const targetElm = e.target;
  const messageId = targetElm.dataset.messageId;
  console.log(messageId, "message id into delete");

  const msgTextElm = selectElem(`#${messageId} .message-text .text`);
  console.log(msgTextElm);

  msgTextElm.textContent = "Message Deleted Successfully";

  setStyle(msgTextElm, { color: "gray" });

  // remove data from the storage
  setTimeout(() => {
    deleteMessageFromTheStorage(messageId);
    displayMessages();
  }, 1000);
}
