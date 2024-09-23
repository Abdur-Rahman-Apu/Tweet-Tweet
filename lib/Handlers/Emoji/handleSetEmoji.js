import { getMessageLength } from "../../../utils/message.js";
import { typeMsg } from "../../Elements/elements.js";
import { setCountChar } from "../../UI/messages.js";

// set emoji into the type message input box
export default function handleSetEmoji(e) {
  const emoji = e.target.textContent;

  if (emoji) {
    const currentMsg = typeMsg.value ?? "";
    const newMessage = currentMsg + emoji;
    typeMsg.value = newMessage;

    // update char count
    setCountChar(getMessageLength());
  }
}
