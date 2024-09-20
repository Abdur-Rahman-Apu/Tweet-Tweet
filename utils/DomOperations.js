const insertAdjacentHtml = (parent, child, pos) => {
  parent.insertAdjacentHTML(pos, child);
};

const removeElem = (elm) => elm.remove();

const setText = (elm, text) => (elm.textContent = text);

export { insertAdjacentHtml, removeElem, setText };
