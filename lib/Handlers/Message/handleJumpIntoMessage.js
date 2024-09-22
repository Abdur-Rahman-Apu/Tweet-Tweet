import { setStyle } from "../../../utils/DomOperations.js";
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
    const targetElm = selectElem(`#${messageId}`);
    console.log(targetElm, "targetElm");
    const msgTextElm = targetElm.querySelector(".message-text p");

    // set animation of blinking background of selected text
    setStyle(msgTextElm, {
      animation: "blinkBg 1s linear",
    });

    // go to that element
    targetElm.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    // remove the animation property so that we can set animation again
    setTimeout(() => {
      setStyle(msgTextElm, { animation: null });
    }, 1000);
  }
}
