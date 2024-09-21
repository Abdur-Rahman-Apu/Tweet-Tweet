import { setListener } from "../../utils/DomOperations.js";
import {
  changeBgContainer,
  emojiContainer,
  fontStyleContainer,
  settingContainer,
  typeMsg,
} from "../Elements/elements.js";
import {
  handleChangeBgHoverOutState,
  handleChangeBgHoverState,
} from "../Handlers/handleChangeBgHoverState.js";
import {
  handleEmojiBoxHoverOutState,
  handleEmojiBoxHoverState,
} from "../Handlers/handleEmojiHoverState.js";
import {
  handleFontStyleBoxHoverOutState,
  handleFontStyleBoxHoverState,
} from "../Handlers/handleFontStyleBoxToggle.js";
import handleMessageText from "../Handlers/handleMessageText.js";
import {
  handleSettingBoxHoverOutState,
  handleSettingBoxHoverState,
} from "../Handlers/handleSettingHoverState.js";

const listeners = () => {
  setListener(typeMsg, "keyup", handleMessageText);
  setListener(settingContainer, "mouseover", handleSettingBoxHoverState);
  setListener(settingContainer, "mouseout", handleSettingBoxHoverOutState);
  setListener(changeBgContainer, "mouseover", handleChangeBgHoverState);
  setListener(changeBgContainer, "mouseout", handleChangeBgHoverOutState);
  setListener(fontStyleContainer, "mouseover", handleFontStyleBoxHoverState);
  setListener(fontStyleContainer, "mouseout", handleFontStyleBoxHoverOutState);
  setListener(emojiContainer, "mouseover", handleEmojiBoxHoverState);
  setListener(emojiContainer, "mouseout", handleEmojiBoxHoverOutState);
};

export { listeners };
