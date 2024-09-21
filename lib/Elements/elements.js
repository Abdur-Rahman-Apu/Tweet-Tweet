import selectElem from "../../utils/selectElem.js";

const settingContainer = selectElem(".header-right-part");
const settingOptions = selectElem(".setting-options");
const changeBgContainer = selectElem(".change-bg");
const changeBgOptions = selectElem(".change-bg-options");

const chatMessageContainer = selectElem(".chat-message-container");

const typeMsg = selectElem("#typeMsg");
const fontStyleContainer = selectElem(".font-style");
const fontStyleCollection = selectElem(".font-style-collection");
const emojiContainer = selectElem(".emojis");
const emojiCollection = selectElem(".emoji-collections");
const charCountElm = selectElem(".char-count");

export {
  changeBgContainer,
  changeBgOptions,
  charCountElm,
  chatMessageContainer,
  emojiCollection,
  emojiContainer,
  fontStyleCollection,
  fontStyleContainer,
  settingContainer,
  settingOptions,
  typeMsg,
};
