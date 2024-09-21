import {
  insertAdjacentHtml,
  setStyle,
  setText,
} from "../../utils/DomOperations.js";
import { dateUTCformat, isToday } from "../../utils/getDate.js";
import { getMessageId, getSpecificDateMessages } from "../../utils/message.js";
import { charCountElm, chatMessageContainer } from "../Elements/elements.js";
import { getApplicationData } from "../Storage/storage.js";

const setCountChar = (length) => {
  setText(charCountElm, length);
  if (length === 250) {
    setStyle(charCountElm, { color: "#d63031" });
  } else {
    setStyle(charCountElm, { color: "#2d446e" });
  }
};

const setIndividualMessage = (message) => {
  const {
    setting: { profilePic },
  } = getApplicationData();

  const newHtml = `<div class="message-body" id="messageId-${message?.id}">
                        <img src=${profilePic} alt="This image is indicating the user image">
                        <!-- message part -->
                        <div class="message-text">
                            <p>${message?.text}</p>
                            <span class="message-time">${message?.time}</span>
                        </div>
                        
                        <!-- message reply,edit,delete related actions  -->
                        <div class="message-last-part">
                          <div class="message-react" data-action="react"></div>
                          <p class="edit-msg hide">Edited</p>
                          <div class="message-actions">
                              <i class="far fa-smile"></i>
                              <i class="fas fa-caret-down"></i>

                              <div class="message-actions-options">
                                  <div data-action="reply">
                                      <i class="fa-solid fa-reply" data-action="reply"></i>
                                      Reply
                                  </div>
                                  <div class="edit-message" data-action="edit">
                                      <i class="far fa-edit" data-action="edit"></i>
                                      Edit
                                  </div>
                                  <div class="delete-message" data-action="delete">
                                      <i class="fas fa-trash" data-action="delete"></i>
                                      Delete
                                  </div>
                                  <div class="message-react-options">
                                      <p data-action="emoji">👍</p>
                                      <p data-action="emoji">👎</p>
                                      <p data-action="emoji">🤣</p>
                                      <p data-action="emoji">😭</p>
                                      <p data-action="emoji">🙄</p>
                                      <p data-action="emoji">🧡</p>
                                      <p data-action="emoji">🙏</p>
                                      <p data-action="emoji">😡</p>
                                  </div>
                              </div>
                          </div>
                        </div>
                    </div>`;

  return newHtml;
};

const setSpecificDateMessages = (date) => {
  console.log(date, "date");
  const specificDateMessages = getSpecificDateMessages(date);

  const messageId = getMessageId(date);

  const today = isToday(date);

  console.log(today, "is today");
  console.log(specificDateMessages, "specific date messages");

  const newHtml = `<div class="message" id="message-${messageId}">
                    <p class="message-date">${
                      today ? "Today" : `${dateUTCformat(date)}`
                    }</p>

                    ${
                      specificDateMessages?.length
                        ? specificDateMessages
                            .map((message) => setIndividualMessage(message))
                            .join("")
                        : `<p class="wave-message" data-action="wave">Start your conversation 👋</p>`
                    }
                    </div>`;

  insertAdjacentHtml(chatMessageContainer, newHtml, "beforeend");
};

const removeMessagesFromTheUI = () => {
  const children = Array.from(chatMessageContainer.children);
  if (children.length) {
    children.forEach((child) => child.remove());
  }
};

const displayMessages = () => {
  console.log("displayMessages");
  removeMessagesFromTheUI();

  const { messages } = getApplicationData();

  for (const date in messages) {
    setSpecificDateMessages(date);
  }
};

export {
  displayMessages,
  setCountChar,
  setIndividualMessage,
  setSpecificDateMessages,
};
