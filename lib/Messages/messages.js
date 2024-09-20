import { getApplicationData } from "../Storage/storage.js";
import { setSpecificDateMessages } from "../UI/messages.js";

const showMessages = () => {
  const { messages } = getApplicationData();
  console.log(messages, "Messages in show message function");
  const lengthOfTheMessages = Object.keys(messages)?.length;
  if (lengthOfTheMessages) {
    for (const date in messages) {
      setSpecificDateMessages(date);
    }
  }
};

export { showMessages };
