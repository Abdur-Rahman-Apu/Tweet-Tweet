import { fontStyleCollection } from "../Elements/elements.js";
import { hideElement, showElement } from "../UI/toggleElement.js";

const handleFontStyleBoxHoverState = () => {
  console.log("hover");

  showElement(fontStyleCollection);
};

const handleFontStyleBoxHoverOutState = (e) => {
  console.log("hover out");
  hideElement(fontStyleCollection);
};

export { handleFontStyleBoxHoverOutState, handleFontStyleBoxHoverState };
