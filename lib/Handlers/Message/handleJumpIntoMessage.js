import selectElem from "../../../utils/selectElem.js";
import { hideSelectMessageAtInput } from "../../Messages/selectMessageAtInput.js";

export default function handleJumpIntoMessage(e) {
  const messageId = e.currentTarget.dataset.jump;

  console.log(e.currentTarget);
  console.log(e.target);

  const isDeleteBtnClicked = e.target.dataset.action;

  console.log(messageId);

  if (isDeleteBtnClicked) {
    hideSelectMessageAtInput();
  } else {
    selectElem(`#${messageId}`).scrollIntoView({
      behavior: "instant",
      block: "center",
    });
  }
}
