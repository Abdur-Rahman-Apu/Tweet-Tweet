import { getMessageLength, setTextStyle } from "../../../utils/message.js";
import { typeMsg } from "../../Elements/elements.js";
import { getApplicationData } from "../../Storage/storage.js";
import { setCountChar } from "../../UI/messages.js";

// handle font style like bold,italic, underline and line through the text
const handleFontStyleSelect = (e) => {
  const {
    fontStyle: { startIndex, endIndex },
  } = getApplicationData();

  const message = typeMsg.value;

  const condition = message && startIndex && endIndex;
  // if condition matched then set text style on the message
  if (condition) {
    const textStyle = e.target.dataset.text;

    switch (textStyle) {
      case "bold":
        setTextStyle("b", message, startIndex, endIndex);
        break;

      case "italic":
        setTextStyle("i", message, startIndex, endIndex);
        break;
      case "underline":
        setTextStyle("u", message, startIndex, endIndex);
        break;
      case "line":
        setTextStyle("s", message, startIndex, endIndex);
        break;
    }

    // update char count
    setCountChar(getMessageLength());
  }
};

export { handleFontStyleSelect };
