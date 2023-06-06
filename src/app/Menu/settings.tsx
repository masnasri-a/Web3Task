import React, { useState } from "react";
import Profile from "./settings/profile";
import Team from "./settings/team";
import Member from "./settings/member";
import Notification from "./settings/notification";

const Settings = () => {
  const [select, setSelect] = useState(0)
  const settingMenu = [
    "My Profile",
    "Teams",
    "Teams Member",
    "Notification",
    "Delete Account",
  ];
  return (
    <div className="settings">
      <div className="selectSettings">
        {
          settingMenu.slice(0, settingMenu.length - 1).map((detail, index)=>{
            return <div key={index} onClick={()=>setSelect(index)} className={`selectSettingButton ${(index == select)?"active":""}`}>{detail}</div>
          })
        }
        <div className="delete selectSettingButton">{settingMenu[settingMenu.length -1]}</div>
      </div>
      {
        (select == 0)?
           <Profile/>
        :<></>
      }{
        (select == 1)?
           <Team/>
        :<></>
      }{
        (select == 2)?
           <Member/>
        :<></>
      }{
        (select == 3)?
           <Notification/>
        :<></>
      }
    </div>
  );
};

export default Settings;
