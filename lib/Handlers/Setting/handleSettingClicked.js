import changeChatBg from "../../Setting/changeChatBg.js";
import handleChangeProfilePic from "../ProfilePic/handleChangeProfilePic.js";
import { handleOpenSearchBox } from "./handleSearchBox.js";

const handleSettingClicked = (e) => {
  console.log(e.target, "setting clicked");
  const settingOption = e.target.dataset.setting;
  console.log(settingOption);
  if (settingOption) {
    switch (settingOption) {
      case "search":
        console.log("search");
        handleOpenSearchBox(e);
        break;
      case "pic":
        console.log("pic");
        handleChangeProfilePic(e);
        break;

      case "bg":
        changeChatBg(e.target);
        break;
    }
  }
};

export { handleSettingClicked };
