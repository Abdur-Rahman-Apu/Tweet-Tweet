import selectElem from "../../utils/selectElem.js";

const chatMessageContainer = selectElem(".chat-message-container");

const typeMsg = selectElem("#typeMsg");
const charCountElm = selectElem(".char-count");

export { charCountElm, chatMessageContainer, typeMsg };
