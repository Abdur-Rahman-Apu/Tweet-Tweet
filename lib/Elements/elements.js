import selectElem from "../../utils/selectElem.js";

const chatMessageContainer = selectElem(".chat-message-container");

const typeMsg = selectElem("#typeMsg");
const fontStyleContainer = selectElem(".font-style");
const fontStyleCollection = selectElem(".font-style-collection");
const emojiContainer = selectElem(".emojis");
const emojiCollection = selectElem(".emoji-collections");
const charCountElm = selectElem(".char-count");

export {
  charCountElm,
  chatMessageContainer,
  emojiCollection,
  emojiContainer,
  fontStyleCollection,
  fontStyleContainer,
  typeMsg,
};
