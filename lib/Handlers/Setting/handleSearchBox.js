import { setStyle } from "../../../utils/DomOperations.js";
import { searchBox } from "../../Elements/elements.js";

const handleOpenSearchBox = (e) => {
  console.log(e.target);

  setStyle(searchBox, { display: "flex" });
};

const handleCloseSearchBox = () => {
  setStyle(searchBox, { display: "none" });
};

export { handleCloseSearchBox, handleOpenSearchBox };
