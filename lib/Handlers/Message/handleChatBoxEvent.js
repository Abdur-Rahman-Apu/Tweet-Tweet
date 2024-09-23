import {
  selectMessageAtInputForEdit,
  selectMessageAtInputForReply,
} from "../../Messages/selectMessageAtInput.js";
import sendMessage from "../../Messages/sendMessage.js";
import { searchBackward, searchForward } from "../../Setting/SearchText.js";
import { handleCloseSearchBox } from "../Setting/handleSearchBox.js";
import handleDeleteMessage from "./handleDeleteMessage.js";
import handleJumpIntoMessage from "./handleJumpIntoMessage.js";
import handleReactOfTheMessage from "./handleReactOfTheMessage.js";

// Various message events are handled here
//   1. Send wave message
//   2. Select message box show for editing message
//   3. Select message box show for replying message
//   4. Jump to the message on clickig the reply message box
//   5. Delete a message
//   6. React on the message
//   7. Search forward
//   8. Search backward
//   9. Search box close
export default function handleChatBoxEvent(e) {
  const type = e.target.dataset?.action;

  switch (type) {
    case "wave":
      sendMessage("👋");
      break;

    case "edit":
      selectMessageAtInputForEdit(e.target);
      break;

    case "reply":
      selectMessageAtInputForReply(e.target);
      break;

    case "replyMsg":
      handleJumpIntoMessage(e);
      break;

    case "delete":
      handleDeleteMessage(e);
      break;

    case "emoji":
    case "react":
      handleReactOfTheMessage(e);
      break;

    case "searchForward":
      searchForward(e);
      break;

    case "searchBackward":
      searchBackward(e);
      break;

    case "searchClose":
      handleCloseSearchBox(e);
      break;
  }
}
