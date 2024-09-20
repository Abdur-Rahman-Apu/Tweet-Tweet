const insertAdjacentHtml = (parent, child, pos) => {
  parent.insertAdjacentHTML(pos, child);
};

const removeElem = (elm) => elm.remove();

const setText = (elm, text) => (elm.textContent = text);

const setListener = (elm, event, handler) =>
  elm.addEventListener(event, handler);

export { insertAdjacentHtml, removeElem, setListener, setText };
