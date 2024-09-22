import {
  selectMessageAtInputForEdit,
  selectMessageAtInputForReply,
} from "../../Messages/selectMessageAtInput.js";
import sendMessage from "../../Messages/sendMessage.js";
import { handleCloseSearchBox } from "../Setting/handleSearchBox.js";
import handleDeleteMessage from "./handleDeleteMessage.js";
import handleJumpIntoMessage from "./handleJumpIntoMessage.js";
import handleReactOfTheMessage from "./handleReactOfTheMessage.js";

export default function handleChatBoxEvent(e) {
  console.log(e.target);
  const type = e.target.dataset?.action;

  switch (type) {
    case "wave":
      sendMessage("👋");
      break;

    case "edit":
      console.log("edit");
      selectMessageAtInputForEdit(e.target);
      break;

    case "reply":
      console.log("reply");
      selectMessageAtInputForReply(e.target);
      break;

    case "replyMsg":
      console.log("reply msg");
      handleJumpIntoMessage(e);
      break;

    case "delete":
      console.log("delete msg");
      handleDeleteMessage(e);
      break;

    case "emoji":
    case "react":
      console.log("emoji msg");
      handleReactOfTheMessage(e);
      break;

    case "search":
      console.log("search msg");
      handleCloseSearchBox(e);
      break;
  }
}
