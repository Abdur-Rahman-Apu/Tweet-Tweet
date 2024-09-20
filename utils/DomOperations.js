const insertAdjacentHtml = (parent, child, pos) => {
  parent.insertAdjacentHTML(pos, child);
};

const removeElem = (elm) => elm.remove();

const setText = (elm, text) => (elm.textContent = text);

const setListener = (elm, event, handler) =>
  elm.addEventListener(event, handler);

const setStyle = (elm, newStyle) => {
  Object.assign(elm.style, newStyle);
};

export { insertAdjacentHtml, removeElem, setListener, setStyle, setText };
