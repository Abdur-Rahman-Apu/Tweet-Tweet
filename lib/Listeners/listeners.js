import { setListener } from "../../utils/DomOperations.js";
import {
  changeBgContainer,
  chatBoxBody,
  emojiContainer,
  fontStyleContainer,
  likeBtn,
  selectMessageAtInput,
  sendBtn,
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
import handleChatBoxEvent from "../Handlers/Message/handleChatBoxEvent.js";
import handleJumpIntoMessage from "../Handlers/Message/handleJumpIntoMessage.js";
import handleLikeBtn from "../Handlers/Message/handleLikeBtn.js";

import handleMessageText from "../Handlers/Message/handleMessageText.js";
import handleSelectMessage from "../Handlers/Message/handleSelectMessage.js";
import handleSendMessage from "../Handlers/Message/handleSendMessage.js";
import { handleSettingClicked } from "../Handlers/Setting/handleSettingClicked.js";
import {
  handleSettingBoxHoverOutState,
  handleSettingBoxHoverState,
} from "../Handlers/Setting/handleSettingHoverState.js";

const listeners = () => {
  setListener(typeMsg, "keyup", handleMessageText);
  setListener(typeMsg, "select", handleSelectMessage);
  setListener(sendBtn, "click", handleSendMessage);
  setListener(likeBtn, "click", handleLikeBtn);
  setListener(selectMessageAtInput, "click", handleJumpIntoMessage);

  setListener(chatBoxBody, "click", handleChatBoxEvent);

  setListener(settingContainer, "mouseover", handleSettingBoxHoverState);
  setListener(settingContainer, "mouseout", handleSettingBoxHoverOutState);
  setListener(settingContainer, "click", handleSettingClicked);

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
