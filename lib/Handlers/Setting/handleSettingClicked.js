import changeChatBg from "../../Setting/changeChatBg.js";

const handleSettingClicked = (e) => {
  console.log(e.target, "setting clicked");
  const settingOption = e.target.dataset.setting;
  console.log(settingOption);
  if (settingOption) {
    switch (settingOption) {
      case "search":
        break;
      case "pic":
        break;

      case "bg":
        changeChatBg(e.target);
        break;
    }
  }
};

export { handleSettingClicked };
