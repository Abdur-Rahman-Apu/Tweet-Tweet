const insertAdjacentHtml = (parent, child, pos) => {
  parent.insertAdjacentHTML(pos, child);
};

const removeElem = (elm) => elm.remove();

const setText = (elm, text) => (elm.textContent = text);

const getText = (elm) => elm.textContent;

const setListener = (elm, event, handler) =>
  elm.addEventListener(event, handler);

const setStyle = (elm, newStyle) => {
  Object.assign(elm.style, newStyle);
};

const addClass = (elm, name) => elm.classList.add(name);

const removeClass = (elm, name) => elm.classList.remove(name);

const setAttr = (elm, name, value) => elm.setAttribute(name, value);
const removeAttr = (elm, name) => elm.removeAttribute(name);
const getAttr = (elm, name) => elm.getAttribute(name);

export {
  addClass,
  getAttr,
  getText,
  insertAdjacentHtml,
  removeAttr,
  removeClass,
  removeElem,
  setAttr,
  setListener,
  setStyle,
  setText,
};
