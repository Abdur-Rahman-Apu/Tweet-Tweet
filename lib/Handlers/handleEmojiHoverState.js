import { emojiCollection } from "../Elements/elements.js";
import { hideElement, showElement } from "../UI/toggleElement.js";

const handleEmojiBoxHoverState = () => {
  showElement(emojiCollection);
};

const handleEmojiBoxHoverOutState = () => {
  hideElement(emojiCollection);
};

export { handleEmojiBoxHoverOutState, handleEmojiBoxHoverState };
