import { fontStyleCollection } from "../../Elements/elements.js";
import { hideElement, showElement } from "../../UI/toggleElement.js";

const handleFontStyleBoxHoverState = () => {
  showElement(fontStyleCollection);
};

const handleFontStyleBoxHoverOutState = () => {
  hideElement(fontStyleCollection);
};

export { handleFontStyleBoxHoverOutState, handleFontStyleBoxHoverState };
