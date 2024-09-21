import {
  addClass,
  removeAttr,
  removeClass,
} from "../../utils/DomOperations.js";

const showElement = (targetElm) => {
  const previousHoverTimeoutId = targetElm.dataset.hoverTimeOutId;

  previousHoverTimeoutId && clearTimeout(previousHoverTimeoutId);

  addClass(targetElm, "show");
};

const hideElement = (targetElm) => {
  const timeOutId = setTimeout(() => {
    removeClass(targetElm, "show");
    removeAttr(targetElm, "data-hover-time-out-id");
  }, 1000);

  targetElm.dataset.hoverTimeOutId = timeOutId;
};

export { hideElement, showElement };
