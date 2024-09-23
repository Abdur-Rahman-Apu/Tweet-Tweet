import { setFontStyle } from "../../Storage/storage.js";

// This handler function will be called when typing message input is selected. We will extract the selected message start index and end index. Finally, store them into the storage
export default function handleSelectMessage(e) {
  const startIndex = e.target.selectionStart;
  const endIndex = e.target.selectionEnd;

  setFontStyle({ startIndex, endIndex });
}
