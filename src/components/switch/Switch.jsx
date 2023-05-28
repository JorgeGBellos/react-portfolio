import React, {useState} from "react";
import './switch.css'
import { useTranslation } from "react-i18next";

export const Switch = () => {
  const [ t, i18n ] = useTranslation("global");
  const [checked, setChecked] = useState(false);
  
  const handleChange = () => { 
    setChecked(!checked);
    console.log(checked);
    if(checked){
      i18n.changeLanguage("en");
    }else{
      i18n.changeLanguage("es");
    }
  }; 
  return (
    <div className="switch-container">
      <label className="switch">
        <input type="checkbox" onChange={handleChange} />
        <span className="slider"></span>
      </label>
    </div>
  );
};
