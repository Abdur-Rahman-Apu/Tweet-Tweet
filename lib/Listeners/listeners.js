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
} from "../Handlers/Background/handleChangeBgHoverState.js";
import {
  handleEmojiBoxHoverOutState,
  handleEmojiBoxHoverState,
} from "../Handlers/Emoji/handleEmojiHoverState.js";
import handleSetEmoji from "../Handlers/Emoji/handleSetEmoji.js";
import { handleFontStyleSelect } from "../Handlers/FontStyle/handleFontStyle.js";
import {
  handleFontStyleBoxHoverOutState,
  handleFontStyleBoxHoverState,
} from "../Handlers/FontStyle/handleFontStyleBoxToggle.js";

import handleMessageText from "../Handlers/Message/handleMessageText.js";
import handleSelectMessage from "../Handlers/Message/handleSelectMessage.js";
import {
  handleSettingBoxHoverOutState,
  handleSettingBoxHoverState,
} from "../Handlers/Setting/handleSettingHoverState.js";

const listeners = () => {
  setListener(typeMsg, "keyup", handleMessageText);
  setListener(typeMsg, "select", handleSelectMessage);

  setListener(settingContainer, "mouseover", handleSettingBoxHoverState);
  setListener(settingContainer, "mouseout", handleSettingBoxHoverOutState);

  setListener(changeBgContainer, "mouseover", handleChangeBgHoverState);
  setListener(changeBgContainer, "mouseout", handleChangeBgHoverOutState);

  setListener(fontStyleContainer, "mouseover", handleFontStyleBoxHoverState);
  setListener(fontStyleContainer, "mouseout", handleFontStyleBoxHoverOutState);
  setListener(fontStyleContainer, "click", handleFontStyleSelect);

  setListener(emojiContainer, "mouseover", handleEmojiBoxHoverState);
  setListener(emojiContainer, "mouseout", handleEmojiBoxHoverOutState);
  setListener(emojiContainer, "click", handleSetEmoji);
};

export { listeners };
