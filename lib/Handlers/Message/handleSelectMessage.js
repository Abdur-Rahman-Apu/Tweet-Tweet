import { setFontStyle } from "../../Storage/storage.js";

export default function handleSelectMessage(e) {
  const startIndex = e.target.selectionStart;
  const endIndex = e.target.selectionEnd;

  setFontStyle({ startIndex, endIndex });
}
