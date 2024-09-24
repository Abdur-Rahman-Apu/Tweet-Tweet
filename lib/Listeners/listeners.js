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
import handleSaveProfilePic from "../Handlers/ProfilePic/handleSaveProfilePic.js";
import handlerSearchInput from "../Handlers/Setting/handlerSearchInput.js";
import { handleSettingClicked } from "../Handlers/Setting/handleSettingClicked.js";
import {
  handleSettingBoxHoverOutState,
  handleSettingBoxHoverState,
} from "../Handlers/Setting/handleSettingHoverState.js";

const listeners = () => {
  // Listen the textarea of typing message
  setListener(typeMsg, "keyup", handleMessageText);
  setListener(typeMsg, "select", handleSelectMessage);

  // Listen send, like and edit btn of the footer bottom
  setListener(sendBtn, "click", handleSendMessage);
  setListener(likeBtn, "click", handleLikeBtn);
  setListener(editBtn, "click", handleEditMessage);

  // Listen the input box of searching message
  setListener(searchInput, "keyup", handlerSearchInput);

  // Listen select message to jump to that selected message
  setListener(selectMessageAtInput, "click", handleJumpIntoMessage);

  // Listen the chat box body containers events
  setListener(chatBoxBody, "click", handleChatBoxEvent);

  // Listen setting icon events
  setListener(settingContainer, "mouseover", handleSettingBoxHoverState);
  setListener(settingContainer, "mouseout", handleSettingBoxHoverOutState);
  setListener(settingContainer, "click", handleSettingClicked);

  // Listen modal related events to change profile pic
  setListener(modalCancelBtn, "click", handleModalClose);
  setListener(modalSaveBtn, "click", handleSaveProfilePic);
  setListener(profileUrlInput, "keyup", handlePreviewProfileImg);
  setListener(img, "error", handleBrokenImageLinkOfProfile);

  // Listen change background related events
  setListener(changeBgContainer, "mouseover", handleChangeBgHoverState);
  setListener(changeBgContainer, "mouseout", handleChangeBgHoverOutState);

  // Listen font style related events (footer bottom left side)
  setListener(fontStyleContainer, "mouseover", handleFontStyleBoxHoverState);
  setListener(fontStyleContainer, "mouseout", handleFontStyleBoxHoverOutState);
  setListener(fontStyleContainer, "click", handleFontStyleSelect);

  // Listen emoji icons events (footer bottom left side)
  setListener(emojiContainer, "mouseover", handleEmojiBoxHoverState);
  setListener(emojiContainer, "mouseout", handleEmojiBoxHoverOutState);
  setListener(emojiContainer, "click", handleSetEmoji);
};

export { listeners };

