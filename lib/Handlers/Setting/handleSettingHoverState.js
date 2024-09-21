import { settingOptions } from "../../Elements/elements.js";
import { hideElement, showElement } from "../../UI/toggleElement.js";

const handleSettingBoxHoverState = () => {
  showElement(settingOptions);
};

const handleSettingBoxHoverOutState = () => {
  hideElement(settingOptions);
};

export { handleSettingBoxHoverOutState, handleSettingBoxHoverState };
