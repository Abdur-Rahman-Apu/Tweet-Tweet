import { setText } from "../../utils/DomOperations.js";
import {
  currentMatchText,
  searchBackwardElm,
  searchForwardElm,
  totalMatchText,
} from "../Elements/elements.js";
import handleJumpIntoMessage from "../Handlers/Message/handleJumpIntoMessage.js";
import { getApplicationData, setApplicationData } from "../Storage/storage.js";

const getAllMessagesIntoSingleVariable = () => {
  const data = getApplicationData();
  // messages are stored as obj where key is date
  const allMessagesObj = data.messages;

  // all dates message need to be stored into single array
  let messages = [];

  //   traverse into messages obj so that we can extract all messages into single variable
  for (const date in allMessagesObj) {
    const specificDateMessages = allMessagesObj[date];
    messages = [...messages, ...specificDateMessages];
  }

  return messages;
};

// get messages id which are containing search text
const filterMatchedMessagesId = (messages, searchText) => {
  const matchMessageId = messages.reduce((matchMsgArr, currentMessage) => {
    if (currentMessage.text.includes(searchText)) {
      matchMsgArr.push(currentMessage.id);
    }

    return matchMsgArr;
  }, []);

  return matchMessageId;
};

const highlightMatchChar = (matchMessageId, searchText, replaceText) => {
  const data = getApplicationData();
  // Regular expression needed for replace text dynamically
  const regex = new RegExp(searchText, "g");

  for (const date in data.messages) {
    const specificDateMessages = data.messages[date].map((message) => {
      if (matchMessageId.includes(message.id)) {
        message.text = message.text.replaceAll(regex, replaceText);
      }
      return message;
    });

    data.messages[date] = specificDateMessages;
  }

  console.log(data, "updated data", searchText, replaceText);

  //   update into storage
  setApplicationData(data);
};

const removeHighlightMatchChar = () => {
  const data = getApplicationData();
  const matchMessagesId = data.search.id;

  if (matchMessagesId.length) {
    const searchText = `<mark>${data.search.text}</mark>`;
    const replaceText = data.search.text;
    highlightMatchChar(matchMessagesId, searchText, replaceText);
  }
};

const updateFoundSearchTextCount = () => {
  const data = getApplicationData();

  const totalMatch = data.search.id.length;

  setText(totalMatchText, totalMatch);
};

const getCurrentMessageIndex = (arr, id) => {
  return arr.findIndex((item) => item === id);
};

const isValidToSearchForward = () => {
  const {
    search: { id: foundMsgIds },
  } = getApplicationData();
  const maxStep = foundMsgIds.length;
  const currentStep = +currentMatchText.textContent;
  return maxStep !== currentStep;
};

const searchForward = (e) => {
  if (isValidToSearchForward()) {
    console.log(e.target, "search forward");
    const data = getApplicationData();
    const searchMessageIds = data.search.id;

    const backwardValue = searchBackwardElm.dataset.jump;
    const forwardValue = searchForwardElm.dataset.jump;

    console.log(backwardValue, "backward value", typeof backwardValue);
    let targetId = null;

    if (backwardValue === "null") {
      // if search backward value not present

      if (forwardValue === "null") {
        // if search forward value is null, then set the first message id
        targetId = searchMessageIds[0];
        setText(currentMatchText, 1);
      } else {
        // forward value format is messageId-*, we have to cut the messageId text
        const forwardValueId = forwardValue.slice(10);

        console.log(forwardValueId, "forward value id");
        // if forward value ProgressEvent, then find the current message id index
        const currentMsgIndex = getCurrentMessageIndex(
          searchMessageIds,
          forwardValueId
        );

        //   target id will be the next array element
        targetId = searchMessageIds[currentMsgIndex + 1];

        console.log(currentMsgIndex, "forward value not null");
        setText(currentMatchText, currentMsgIndex + 2);
      }
    } else {
      console.log("object");
      const backwardValueId = backwardValue.slice(10);
      const currentMsgIndex = getCurrentMessageIndex(
        searchMessageIds,
        backwardValueId
      );

      targetId = searchMessageIds[currentMsgIndex + 1];
      setText(currentMatchText, currentMsgIndex + 2);
    }

    console.log(targetId, "target id search");
    searchForwardElm.dataset.jump = `messageId-${targetId}`;

    searchBackwardElm.dataset.jump = null;

    handleJumpIntoMessage(e);
  }
};

const isValidToSearchBackward = () => {
  return (
    +currentMatchText.textContent !== 0 && +currentMatchText.textContent !== 1
  );
};

const searchBackward = (e) => {
  console.log("inside backward");
  if (isValidToSearchBackward()) {
    console.log("valid backward");
    const data = getApplicationData();
    const searchMessageIds = data.search.id;

    const backwardValue = searchBackwardElm.dataset.jump;
    const forwardValue = searchForwardElm.dataset.jump;

    if (forwardValue !== "null") {
      const targetIndex = +currentMatchText.textContent - 2;

      const targetId = searchMessageIds[targetIndex];
      currentMatchText.textContent--;
      searchBackwardElm.dataset.jump = `messageId-${targetId}`;
      searchForwardElm.dataset.jump = null;

      handleJumpIntoMessage(e);
    }
  }
};

const resetSearchActionValues = () => {
  currentMatchText.textContent = 0;
  totalMatchText.textContent = 0;
  searchForwardElm.dataset.jump = null;
  searchBackwardElm.dataset.jump = null;
};

export {
  filterMatchedMessagesId,
  getAllMessagesIntoSingleVariable,
  highlightMatchChar,
  removeHighlightMatchChar,
  resetSearchActionValues,
  searchBackward,
  searchForward,
  updateFoundSearchTextCount,
};
