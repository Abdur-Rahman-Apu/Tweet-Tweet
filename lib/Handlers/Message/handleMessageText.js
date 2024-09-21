import { setCountChar } from "../../UI/messages.js";

export default function handleMessageText(e) {
  console.log(e.target.value);
  console.log(e, "message");
  const message = e.target.value;
  const messageLength = e.target.textLength;
  console.log(messageLength);
  if (messageLength < 251) {
    setCountChar(messageLength);
  }
}
