import { setStyle } from "../../utils/DomOperations.js";
import { chatBoxBody } from "../Elements/elements.js";
import { getApplicationData, setApplicationData } from "../Storage/storage.js";

export default function changeChatBg(targetElm) {
  // textContent = background-1  (get no after hyphen)
  const picNo = targetElm.textContent.split("-")[1];

  const srcUrl = `./assets/images/chatbg/bg-${picNo}.jpg`;

  setStyle(chatBoxBody, { background: `url(${srcUrl})` });

  //   set background image url into the storage
  const data = getApplicationData();

  data.setting.bg = srcUrl;

  setApplicationData(data);
}
