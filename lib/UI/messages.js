import { insertAdjacentHtml } from "../../utils/DomOperations.js";
import { dateUTCformat, getToday, isToday } from "../../utils/getDate.js";
import { getMessageId, getSpecificDateMessages } from "../../utils/message.js";
import { chatMessageContainer } from "../Elements/elements.js";
import { getApplicationData } from "../Storage/storage.js";

const setWaveMessage = () => {
  return `<p>Start your conversation 👋</p>`;
};

const setIndividualMessage = (message) => {
  const { hours, minutes, dayOrNight } = getToday();
  const {
    setting: { profilePic },
  } = getApplicationData();

  const newHtml = `<div class="message-body">
                        <img src=${profilePic} alt="This image is indicating the user image">
                        <!-- message part -->
                        <div class="message-text">
                            <p></p>

                            <div class="message-react"><span>Edited</span></div>
                            <span class="message-time">${hours}:${minutes} ${dayOrNight}</span>
                        </div>
                        <!-- message reply,edit,delete related actions  -->
                        <div class="message-actions">
                            <i class="far fa-smile"></i>
                            <i class="fas fa-caret-down"></i>

                            <div class="message-actions-options">
                                <div class="edit-message">
                                    <i class="far fa-edit"></i>
                                    Edit
                                </div>
                                <div class="delete-message">
                                    <i class="fas fa-trash"></i>
                                    Delete
                                </div>
                                <div class="message-react-options">
                                    <p>👍</p>
                                    <p>👎</p>
                                    <p>🤣</p>
                                    <p>😭</p>
                                    <p>🙄</p>
                                    <p>🧡</p>
                                    <p>🙏</p>
                                    <p>😡</p>
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
                        ? specificDateMessages.map((message) =>
                            setIndividualMessage(message).join("")
                          )
                        : `<p class="wave-message">Start your conversation 👋</p>`
                    }
                    </div>`;

  insertAdjacentHtml(chatMessageContainer, newHtml, "beforeend");
};

export { setIndividualMessage, setSpecificDateMessages };
