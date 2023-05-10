import React from "react";
import Header from "../header";

function Main() {
  return (
    <div className="main-section section">
      <Header />
      <div className="content">
        <div className="main-title text-center text-white">
          <h1>"Crafting seamless experiences, pixel by pixel."</h1>
        </div>
        <div className="text-center">
          <h2 className="username">Akhil Kumar Doosari</h2>
        </div>
        <div className="text-center">
          <h2 className="role">UI/UX Designer</h2>
        </div>
        <div className="scroll-indicator">
          <div>
            <span className="scroll-text">Scroll</span>
          </div>
          <div className="vertical-divider"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
