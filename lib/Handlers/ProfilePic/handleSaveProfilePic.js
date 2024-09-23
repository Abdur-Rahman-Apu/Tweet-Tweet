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

// This function will be called when the profile pic change modal's save button will be clicked
export default function handleSaveProfilePic() {
  const profileInputValue = profileUrlInput.value;
  const { valid, typeMismatch } = profileUrlInput.validity;

  // Input field validation
  const condition = valid && !typeMismatch && profileInputValue;

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
