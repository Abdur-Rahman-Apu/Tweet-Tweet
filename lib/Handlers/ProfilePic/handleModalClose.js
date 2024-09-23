import { setStyle } from "../../../utils/DomOperations.js";
import {
  modal,
  profileImgPreview,
  profileUrlInput,
} from "../../Elements/elements.js";
import { getApplicationData } from "../../Storage/storage.js";

// This handler will be called when the modal's cancel button triggered
export default function handleModalClose() {
  const {
    setting: { profilePic },
  } = getApplicationData();

  profileImgPreview.src = profilePic;

  setStyle(modal, { display: "none" });
  profileUrlInput.value = "";
}
