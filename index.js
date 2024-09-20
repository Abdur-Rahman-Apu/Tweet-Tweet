import { showMessages } from "./lib/Messages/messages.js";
import { setInitialData } from "./lib/Storage/storage.js";

(() => {
  setInitialData();
  showMessages();
})();
