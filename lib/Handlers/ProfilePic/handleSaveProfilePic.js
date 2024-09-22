import { setStyle } from "../../../utils/DomOperations.js";
import {
  inputErrMessage,
  modal,
  profileUrlInput,
} from "../../Elements/elements.js";
import {
  getApplicationData,
  setApplicationData,
} from "../../Storage/storage.js";
import { displayMessages } from "../../UI/messages.js";

export default function handleSaveProfilePic(e) {
  const profileInputValue = profileUrlInput.value;
  const { valid, typeMismatch } = profileUrlInput.validity;
  const condition = valid && !typeMismatch && profileInputValue;
  console.log(condition, "condition");
  if (condition) {
    const data = getApplicationData();
    data.setting.profilePic = profileInputValue;
    setApplicationData(data);
    displayMessages();
    setStyle(modal, { display: "none" });
  } else if (!profileInputValue) {
    setStyle(inputErrMessage, { display: "block" });
  }
}
