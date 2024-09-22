import { setReactIconIntoSpecificMessage } from "../../Storage/storage.js";
import { displayMessages } from "../../UI/messages.js";

export default function handleReactOfTheMessage(e) {
  console.log(e.currentTarget, "handle current target react");
  console.dir(e.target, "handle target react");

  const action = e.target.dataset.action;

  if (action === "emoji") {
    const messageId = e.target.dataset.messageId;
    const icon = e.target.textContent;
    console.log(messageId, icon, "react");
    setReactIconIntoSpecificMessage(messageId, icon);

    // show into the UI
    displayMessages();
  }
}
