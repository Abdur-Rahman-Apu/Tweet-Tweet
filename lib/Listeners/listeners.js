import { setListener } from "../../utils/DomOperations.js";
import { typeMsg } from "../Elements/elements.js";
import handleMessageText from "../Handlers/handleMessageText.js";

const listeners = () => {
  setListener(typeMsg, "keyup", handleMessageText);
};

export { listeners };
