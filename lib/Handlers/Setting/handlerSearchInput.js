import {
  filterMatchedMessagesId,
  getAllMessagesIntoSingleVariable,
  highlightMatchChar,
  removeHighlightMatchChar,
  updateFoundSearchTextCount,
} from "../../Setting/SearchText.js";
import { updateSearchMessagesIntoStorage } from "../../Storage/storage.js";
import { displayMessages } from "../../UI/messages.js";

// search handler to perform search within the message
export default function handlerSearchInput(e) {
  // remove previously highlighted character
  removeHighlightMatchChar();

  // clear search message id arr into the storage
  updateSearchMessagesIntoStorage({
    action: "clear",
  });

  console.log(e.target.value);
  const searchText = e.target.value;

  if (searchText) {
    const messages = getAllMessagesIntoSingleVariable();
    const matchMessageId = filterMatchedMessagesId(messages, searchText);

    // update matched messages id into the storage
    updateSearchMessagesIntoStorage({
      action: "update",
      messagesId: matchMessageId,
      searchText,
    });

    // highlight match text
    const replaceText = `<mark>${searchText}</mark>`;
    highlightMatchChar(matchMessageId, searchText, replaceText);

    console.log(messages, "messages into single variable");
  }
  // display into the UI
  displayMessages();

  updateFoundSearchTextCount();
}
