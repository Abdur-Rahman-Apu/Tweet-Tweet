import selectElem from "../../utils/selectElem.js";

const chatMessageContainer = selectElem(".chat-message-container");

const typeMsg = selectElem("#typeMsg");
const fontStyleContainer = selectElem(".font-style");
const fontStyleCollection = selectElem(".font-style-collection");
const charCountElm = selectElem(".char-count");

export {
  charCountElm,
  chatMessageContainer,
  fontStyleCollection,
  fontStyleContainer,
  typeMsg,
};
