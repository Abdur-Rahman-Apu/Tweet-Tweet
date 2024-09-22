import selectElem from "../../../utils/selectElem.js";
import { hideSelectMessageAtInput } from "../../Messages/selectMessageAtInput.js";

export default function handleJumpIntoMessage(e) {
  const messageId = e.currentTarget.dataset.jump || e.target.dataset.jump;
  console.log(e.currentTarget);

  console.log(e.target);

  const isDeleteBtnClicked = e.target.dataset.action === "delete";

  console.log(messageId);

  if (isDeleteBtnClicked) {
    hideSelectMessageAtInput(true);
  } else {
    selectElem(`#${messageId}`).scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}
