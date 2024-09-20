import { setCountChar } from "../UI/messages.js";

export default function handleMessageText(e) {
  console.log(e.target.value);
  const message = e.target.value;
  console.log(message.length);
  if (message.length < 251) {
    setCountChar(message);
  }
}
