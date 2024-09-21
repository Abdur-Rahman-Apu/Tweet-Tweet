import { changeBgOptions } from "../../Elements/elements.js";
import { hideElement, showElement } from "../../UI/toggleElement.js";

const handleChangeBgHoverState = () => {
  console.log("hover");
  showElement(changeBgOptions);
};

const handleChangeBgHoverOutState = () => {
  console.log("hover out");
  hideElement(changeBgOptions);
};

export { handleChangeBgHoverOutState, handleChangeBgHoverState };
