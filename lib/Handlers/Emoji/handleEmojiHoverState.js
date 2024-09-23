import { emojiCollection } from "../../Elements/elements.js";
import { hideElement, showElement } from "../../UI/toggleElement.js";

// Open on mouse hover and hide on mouse hover out
const handleEmojiBoxHoverState = () => {
  showElement(emojiCollection);
};

const handleEmojiBoxHoverOutState = () => {
  hideElement(emojiCollection);
};

export { handleEmojiBoxHoverOutState, handleEmojiBoxHoverState };
