import { typeMsg } from "../../Elements/elements.js";
import sendMessage from "../../Messages/sendMessage.js";

export default function handleSendMessage(e) {
  const message = typeMsg.value;
  if (message) {
    sendMessage(message);
  }
}
