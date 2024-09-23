import changeChatBg from "../../Setting/changeChatBg.js";
import handleChangeProfilePic from "../ProfilePic/handleChangeProfilePic.js";
import { handleOpenSearchBox } from "./handleSearchBox.js";

const handleSettingClicked = (e) => {
  const settingOption = e.target.dataset.setting;

  if (settingOption) {
    switch (settingOption) {
      case "search":
        handleOpenSearchBox(e);
        break;
      case "pic":
        handleChangeProfilePic(e);
        break;

      case "bg":
        changeChatBg(e.target);
        break;
    }
  }
};

export { handleSettingClicked };
