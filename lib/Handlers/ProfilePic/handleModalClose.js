import { setStyle } from "../../../utils/DomOperations.js";
import {
  modal,
  profileImgPreview,
  profileUrlInput,
} from "../../Elements/elements.js";
import { getApplicationData } from "../../Storage/storage.js";

export default function handleModalClose() {
  setStyle(modal, { display: "none" });
  profileUrlInput.value = "";
  const { setting: profilePic } = getApplicationData();
  profileImgPreview.src = profilePic;
}
