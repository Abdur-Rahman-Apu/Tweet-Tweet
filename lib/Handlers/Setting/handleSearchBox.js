import { setStyle } from "../../../utils/DomOperations.js";
import { searchBox, searchInput } from "../../Elements/elements.js";
import {
  removeHighlightMatchChar,
  resetSearchActionValues,
} from "../../Setting/SearchText.js";
import { updateSearchMessagesIntoStorage } from "../../Storage/storage.js";
import { displayMessages } from "../../UI/messages.js";

// To open the search box and focus the search input
const handleOpenSearchBox = () => {
  setStyle(searchBox, { display: "flex" });

  searchInput.focus();
};

// Close the search box, clear the storage and remove highlighted color
const handleCloseSearchBox = () => {
  resetSearchActionValues();

  // remove existing highlight symbol
  removeHighlightMatchChar();

  // update the storage
  updateSearchMessagesIntoStorage({ action: "clear" });

  setStyle(searchBox, { display: "none" });

  searchInput.value = "";

  displayMessages();
};

export { handleCloseSearchBox, handleOpenSearchBox };
