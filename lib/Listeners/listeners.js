import { setListener } from "../../utils/DomOperations.js";
import {
  changeBgContainer,
  chatBoxBody,
  editBtn,
  emojiContainer,
  fontStyleContainer,
  img,
  likeBtn,
  modalCancelBtn,
  modalSaveBtn,
  profileUrlInput,
  searchInput,
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
import handleEditMessage from "../Handlers/Message/handleEditMessage.js";
import handleJumpIntoMessage from "../Handlers/Message/handleJumpIntoMessage.js";
import handleLikeBtn from "../Handlers/Message/handleLikeBtn.js";

import handleMessageText from "../Handlers/Message/handleMessageText.js";
import handleSelectMessage from "../Handlers/Message/handleSelectMessage.js";
import handleSendMessage from "../Handlers/Message/handleSendMessage.js";
import handleBrokenImageLinkOfProfile from "../Handlers/ProfilePic/handleBrokenImageLinkOfProfile.js";
import handleModalClose from "../Handlers/ProfilePic/handleModalClose.js";
import handlePreviewProfileImg from "../Handlers/ProfilePic/handlePreviewProfileImg.js";
import handleSaveProfilePic from "../Handlers/ProfilePic/handleSaveProfilepic.js";
import handlerSearchInput from "../Handlers/Setting/handlerSearchInput.js";
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
  setListener(editBtn, "click", handleEditMessage);

  setListener(searchInput, "keyup", handlerSearchInput);

  setListener(selectMessageAtInput, "click", handleJumpIntoMessage);

  setListener(chatBoxBody, "click", handleChatBoxEvent);

  setListener(settingContainer, "mouseover", handleSettingBoxHoverState);
  setListener(settingContainer, "mouseout", handleSettingBoxHoverOutState);
  setListener(settingContainer, "click", handleSettingClicked);

  setListener(modalCancelBtn, "click", handleModalClose);
  setListener(modalSaveBtn, "click", handleSaveProfilePic);
  setListener(profileUrlInput, "keyup", handlePreviewProfileImg);
  setListener(img, "error", handleBrokenImageLinkOfProfile);

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
