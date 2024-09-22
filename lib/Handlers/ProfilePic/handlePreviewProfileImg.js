import { setStyle } from "../../../utils/DomOperations.js";
import { inputErrMessage, profileImgPreview } from "../../Elements/elements.js";

export default function handlePreviewProfileImg(e) {
  setStyle(inputErrMessage, { display: "none" });
  console.log(e.target.value, "preview profile pic");
  console.dir(e.target.validity);
  const { valid, typeMismatch } = e.target.validity;
  console.log(valid && !typeMismatch, "condition");
  if (valid && !typeMismatch && e.target.value) {
    profileImgPreview.src = e.target.value;
  } else {
    profileImgPreview.src = "./assets/images/unknown-avatar.jpeg";
  }
}
