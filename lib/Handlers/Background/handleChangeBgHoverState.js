import { changeBgOptions } from "../../Elements/elements.js";
import { hideElement, showElement } from "../../UI/toggleElement.js";

// change background box hover and hover out events are handled
const handleChangeBgHoverState = () => {
  showElement(changeBgOptions);
};

const handleChangeBgHoverOutState = () => {
  hideElement(changeBgOptions);
};

export { handleChangeBgHoverOutState, handleChangeBgHoverState };
