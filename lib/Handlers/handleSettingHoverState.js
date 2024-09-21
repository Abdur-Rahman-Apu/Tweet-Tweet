import { settingOptions } from "../Elements/elements.js";
import { hideElement, showElement } from "../UI/toggleElement.js";

const handleSettingBoxHoverState = () => {
  console.log("hover");
  showElement(settingOptions);
};

const handleSettingBoxHoverOutState = () => {
  console.log("hover out");
  hideElement(settingOptions);
};

export { handleSettingBoxHoverOutState, handleSettingBoxHoverState };
