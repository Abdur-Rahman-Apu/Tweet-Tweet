import { getMessageLength } from "../../../utils/message.js";
import { setFontStyle } from "../../Storage/storage.js";
import { setCountChar } from "../../UI/messages.js";

// To count message text character and character limit is 250
export default function handleMessageText() {
  // Remove font style value start index and end index to null
  setFontStyle();

  const messageLength = getMessageLength();

  if (messageLength < 251) {
    setCountChar(messageLength);
  }
}
