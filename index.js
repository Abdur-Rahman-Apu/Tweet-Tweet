import { listeners } from "./lib/Listeners/listeners.js";
import { showMessages } from "./lib/Messages/messages.js";
import { setInitialData } from "./lib/Storage/storage.js";

(() => {
  setInitialData();
  listeners();
  showMessages();
})();
