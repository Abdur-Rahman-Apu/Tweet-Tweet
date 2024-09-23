import { setStyle } from "../../../utils/DomOperations.js";
import { inputErrMessage, profileImgPreview } from "../../Elements/elements.js";

// This handler function will be called when the profile input url change
export default function handlePreviewProfileImg(e) {
  setStyle(inputErrMessage, { display: "none" });

  const { valid, typeMismatch } = e.target.validity;

  // if condition matched then set the new img otherwise set default image
  if (valid && !typeMismatch && e.target.value) {
    profileImgPreview.src = e.target.value;
  } else {
    profileImgPreview.src = "./assets/images/unknown-avatar.jpeg";
  }
}
