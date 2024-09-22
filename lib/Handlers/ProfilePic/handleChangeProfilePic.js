import { setStyle } from "../../../utils/DomOperations.js";
import selectElem from "../../../utils/selectElem.js";
import {
  modal,
  profileImgPreview,
  profileUrlInput,
} from "../../Elements/elements.js";
import { getApplicationData } from "../../Storage/storage.js";

export default function handleChangeProfilePic(e) {
  // open the modal for changing profile pic
  console.log(e.target);
  console.log(e.currentTarget);
  const {
    setting: { profilePic },
  } = getApplicationData();
  profileImgPreview.src = profilePic;
  setStyle(modal, { display: "block" });
  setStyle(selectElem(".modal .modal-body .profile-change"), {
    opacity: 1,
    scale: 1,
    transition: "all 1s",
  });

  profileUrlInput.focus();
}
