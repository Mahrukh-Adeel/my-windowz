import React from "react";
import "./window.css";

function Window({ title }) {
  return (
    <div className="window-header mb-[6px]">
        <span>{title}</span>
        <button className="close-btn" onClick={() => alert("Window doesn't want to close!")}>
          <span className="h-10 w-10">✖</span>
        </button>
      </div>
  );
}

export default Window;
