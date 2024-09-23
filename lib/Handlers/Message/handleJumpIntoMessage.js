import { setStyle } from "../../../utils/DomOperations.js";
import selectElem from "../../../utils/selectElem.js";
import { hideSelectMessageAtInput } from "../../Messages/selectMessageAtInput.js";

// To jump to the message with an animation
export default function handleJumpIntoMessage(e) {
  const messageId = e.currentTarget.dataset.jump || e.target.dataset.jump;

  // Two events are handled -
  //    1. Clicked on the delete button of the selected message
  //    2. Clicked on the selected message
  const isDeleteBtnClicked = e.target.dataset.action === "delete";

  if (isDeleteBtnClicked) {
    // isEdit: true (Edit message action)
    hideSelectMessageAtInput(true);
  } else {
    const targetElm = selectElem(`#${messageId}`);

    const msgTextElm = targetElm.querySelector(".message-text .text");

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
