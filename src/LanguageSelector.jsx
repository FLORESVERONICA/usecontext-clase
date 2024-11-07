import React from "react";
import { useLanguage } from "./LanguageContext";

const LanguageSelector = () => {
const { language, changeLanguage } = useLanguage();

const hadleChangeLanguage = (event) => {
    changeLanguage(event.target.value);
};
return (
    <div>
    <label> select Language:</label>
    <select value={language} onChange={hadleChangeLanguage}>
        <option value='en'>English</option>
        <option value='es'>Spanish</option>
        <option value='fr'>French</option>
    </select>
    </div>
);

};
export default LanguageSelector