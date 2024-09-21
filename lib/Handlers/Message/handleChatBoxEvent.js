import sendMessage from "../../Messages/sendMessage.js";

export default function handleChatBoxEvent(e) {
  console.log(e.target);
  const type = e.target.dataset?.type;

  switch (type) {
    case "wave":
      sendMessage("👋");
      break;

    default:
      break;
  }
}
