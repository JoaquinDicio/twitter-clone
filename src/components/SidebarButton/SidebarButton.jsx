import { useEffect } from "react";
import "./SidebarButton.css";
export default function SidebarButton({onClick,active, text, icon }) {

  return (
    <div onClick={(e)=>onClick(e)} className="d-flex align-items-center justify-content-center">
      <div className={"sb__button d-flex justify-content-start align-items-center "+(active?'sb__button--active':'')}>
        {icon}
        <p className="sb__button--text">{text}</p>
      </div>
    </div>
  );
}
