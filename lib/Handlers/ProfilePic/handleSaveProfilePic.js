import { setStyle } from "../../../utils/DomOperations.js";
import {
  inputErrMessage,
  modal,
  profileChangeBox,
  profileChangeSuccessBox,
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

    // hide the profile changing inputs box
    setStyle(profileChangeBox, { display: "none" });

    // open the success message of updating profile pic
    setStyle(profileChangeSuccessBox, { display: "flex" });

    // close the success message and display the updated profile puc
    setTimeout(() => {
      setStyle(modal, { display: "none" });
      setStyle(profileChangeBox, { display: "flex" });
      setStyle(profileChangeSuccessBox, { display: "none" });
      displayMessages();
    }, 1500);
  } else if (!profileInputValue) {
    // input value is empty
    setStyle(inputErrMessage, { display: "block" });
  }
}
