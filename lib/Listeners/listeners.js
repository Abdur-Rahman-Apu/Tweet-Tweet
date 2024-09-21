import { setListener } from "../../utils/DomOperations.js";
import {
  emojiContainer,
  fontStyleContainer,
  typeMsg,
} from "../Elements/elements.js";
import {
  handleEmojiBoxHoverOutState,
  handleEmojiBoxHoverState,
} from "../Handlers/handleEmojiHoverState.js";
import {
  handleFontStyleBoxHoverOutState,
  handleFontStyleBoxHoverState,
} from "../Handlers/handleFontStyleBoxToggle.js";
import handleMessageText from "../Handlers/handleMessageText.js";

const listeners = () => {
  setListener(typeMsg, "keyup", handleMessageText);
  setListener(fontStyleContainer, "mouseover", handleFontStyleBoxHoverState);
  setListener(fontStyleContainer, "mouseout", handleFontStyleBoxHoverOutState);
  setListener(emojiContainer, "mouseover", handleEmojiBoxHoverState);
  setListener(emojiContainer, "mouseout", handleEmojiBoxHoverOutState);
};

export { listeners };
