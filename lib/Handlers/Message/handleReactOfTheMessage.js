import { setReactIconIntoSpecificMessage } from "../../Storage/storage.js";
import { displayMessages } from "../../UI/messages.js";

// Handle reaction on the message
export default function handleReactOfTheMessage(e) {
  const action = e.target.dataset.action;

  // a emoji flag is set to understand, we are trying to add emoji in the message
  if (action === "emoji") {
    const messageId = e.target.dataset.messageId;
    const icon = e.target.textContent;

    setReactIconIntoSpecificMessage(messageId, icon);

    // show into the UI
    displayMessages();
  }
}
