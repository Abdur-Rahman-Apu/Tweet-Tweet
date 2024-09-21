import { setIntoLocalStorage } from "../../../utils/storage.js";
import { getApplicationData } from "../../Storage/storage.js";

export default function handleSelectMessage(e) {
  const data = getApplicationData();

  const startIndex = e.target.selectionStart;
  const endIndex = e.target.selectionEnd;

  data.fontStyle = { startIndex, endIndex };

  setIntoLocalStorage("tweet", data);
}
