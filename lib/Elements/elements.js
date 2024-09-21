import selectElem from "../../utils/selectElem.js";

const settingContainer = selectElem(".header-right-part");
const settingOptions = selectElem(".setting-options");

const changeBgContainer = selectElem(".change-bg");
const changeBgOptions = selectElem(".change-bg-options");

const chatBoxBody = selectElem(".chat-box-body");
const chatMessageContainer = selectElem(".chat-message-container");

const typeMsg = selectElem("#typeMsg");
const likeBtn = selectElem(".like-img");
const fontStyleContainer = selectElem(".font-style");
const fontStyleCollection = selectElem(".font-style-collection");
const emojiContainer = selectElem(".emojis");
const emojiCollection = selectElem(".emoji-collections");
const charCountElm = selectElem(".char-count");
const sendBtn = selectElem(".send-btn");
const editBtn = selectElem(".edit-btn");

export {
  changeBgContainer,
  changeBgOptions,
  charCountElm,
  chatBoxBody,
  chatMessageContainer,
  editBtn,
  emojiCollection,
  emojiContainer,
  fontStyleCollection,
  fontStyleContainer,
  likeBtn,
  sendBtn,
  settingContainer,
  settingOptions,
  typeMsg,
};
