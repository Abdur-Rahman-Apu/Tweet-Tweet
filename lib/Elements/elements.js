import selectElem from "../../utils/selectElem.js";

const img = selectElem("img");

const settingContainer = selectElem(".header-right-part");
const settingOptions = selectElem(".setting-options");

const searchBox = selectElem(".search-box");
const searchInput = selectElem("#search");
const totalMatchText = selectElem(".total-match");
const currentMatchText = selectElem(".current-match-no");
const searchBackwardElm = selectElem(".search-up");
const searchForwardElm = selectElem(".search-down");

const changeBgContainer = selectElem(".change-bg");
const changeBgOptions = selectElem(".change-bg-options");

const modal = selectElem(".modal");
const modalCancelBtn = selectElem(".modal-action .no-btn");
const modalSaveBtn = selectElem(".modal-action .yes-btn");
const profileUrlInput = selectElem("#profileUrl");
const profileImgPreview = selectElem(".profile-img-preview");
const inputErrMessage = selectElem(".input-err-msg");
const profileChangeBox = selectElem(".profile-change");
const profileChangeSuccessBox = selectElem(".profile-change-success");

const chatBoxBody = selectElem(".chat-box-body");
const chatMessageContainer = selectElem(".chat-message-container");
const replyMsg = selectElem(".reply-message");

const selectMessageAtInput = selectElem(".select-message-at-input-box");
const selectMessageText = selectElem(".select-message");
const editIcon = selectElem(".edit-icon");
const replyIcon = selectElem(".reply-icon");

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
  currentMatchText,
  editBtn,
  editIcon,
  emojiCollection,
  emojiContainer,
  fontStyleCollection,
  fontStyleContainer,
  img,
  inputErrMessage,
  likeBtn,
  modal,
  modalCancelBtn,
  modalSaveBtn,
  profileChangeBox,
  profileChangeSuccessBox,
  profileImgPreview,
  profileUrlInput,
  replyIcon,
  replyMsg,
  searchBackwardElm,
  searchBox,
  searchForwardElm,
  searchInput,
  selectMessageAtInput,
  selectMessageText,
  sendBtn,
  settingContainer,
  settingOptions,
  totalMatchText,
  typeMsg,
};
