import { getApplicationData } from "../Storage/storage.js";
import { setSpecificDateMessages } from "../UI/messages.js";

const showMessages = (messages) => {
  const { messages } = getApplicationData();
  const lengthOfTheMessages = Object.keys(messages)?.length;
  if (lengthOfTheMessages) {
    for (const date in messages) {
      setSpecificDateMessages(date);
    }
  }
};

export { showMessages };
