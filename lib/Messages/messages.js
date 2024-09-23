import { getApplicationData } from "../Storage/storage.js";
import { setSpecificDateMessages } from "../UI/messages.js";

const showMessages = () => {
  const { messages } = getApplicationData();

  const lengthOfTheMessages = Object.keys(messages)?.length;

  // checking message are available or not , if messages are present, then show messages
  if (lengthOfTheMessages) {
    for (const date in messages) {
      setSpecificDateMessages(date);
    }
  }
};

export { showMessages };
