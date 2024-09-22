import { setStyle } from "../../../utils/DomOperations.js";
import { searchBox, searchInput } from "../../Elements/elements.js";
import {
  removeHighlightMatchChar,
  resetSearchActionValues,
} from "../../Setting/SearchText.js";
import { updateSearchMessagesIntoStorage } from "../../Storage/storage.js";
import { displayMessages } from "../../UI/messages.js";

const handleOpenSearchBox = (e) => {
  console.log(e.target);

  setStyle(searchBox, { display: "flex" });
};

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
