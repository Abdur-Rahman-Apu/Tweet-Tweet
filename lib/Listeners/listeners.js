import { setListener } from "../../utils/DomOperations.js";
import { fontStyleContainer, typeMsg } from "../Elements/elements.js";
import {
  handleFontStyleBoxHoverOutState,
  handleFontStyleBoxHoverState,
} from "../Handlers/handleFontStyleBoxToggle.js";
import handleMessageText from "../Handlers/handleMessageText.js";

const listeners = () => {
  setListener(typeMsg, "keyup", handleMessageText);
  setListener(fontStyleContainer, "mouseover", handleFontStyleBoxHoverState);
  setListener(fontStyleContainer, "mouseout", handleFontStyleBoxHoverOutState);
};

export { listeners };
