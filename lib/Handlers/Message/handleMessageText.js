import { setFontStyle } from "../../Storage/storage.js";
import { setCountChar } from "../../UI/messages.js";

export default function handleMessageText(e) {
  // Remove font style value start index and end index to null
  setFontStyle();

  const messageLength = e.target.textLength;
  console.log(messageLength);
  if (messageLength < 251) {
    setCountChar(messageLength);
  }
}
