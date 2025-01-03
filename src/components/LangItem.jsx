import React from "react";

const LangItem = ({ lang, val, icon }) => {
  return (
    <li className="flex justify-between items-center">
      <div className="flex items-center space-x-2 ">
        <span>{lang}</span>
        {icon && <img loading="lazy" src={icon} alt="country flag" />}
      </div>
      <span className="opacity-50 text-xs pl-4">{val}</span>
    </li>
  );
};

export default LangItem;
