import { typeMsg } from "../../Elements/elements.js";

export default function handleSetEmoji(e) {
  console.log(e.target.textContent);
  const emoji = e.target.textContent;
  const currentMsg = typeMsg.value ?? "";
  const newMessage = currentMsg + emoji;
  typeMsg.value = newMessage;
}
