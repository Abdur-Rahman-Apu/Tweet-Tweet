import { fontStyleCollection } from "../../Elements/elements.js";
import { hideElement, showElement } from "../../UI/toggleElement.js";

// Open on hover and hide on hover out events
const handleFontStyleBoxHoverState = () => {
  showElement(fontStyleCollection);
};

const handleFontStyleBoxHoverOutState = () => {
  hideElement(fontStyleCollection);
};

export { handleFontStyleBoxHoverOutState, handleFontStyleBoxHoverState };
