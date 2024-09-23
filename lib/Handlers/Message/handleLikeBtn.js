import sendMessage from "../../Messages/sendMessage.js";

// footer bottom right side, like button is triggered
export default function handleLikeBtn() {
  sendMessage("👍");
}
