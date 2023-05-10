import React from "react";

function NextSection() {
  return (
    <>
      <div className="footer-section section">
        <div>
          <div className="main-title text-center text-white">
            <h1 className="footer_font pt-5">Works</h1>
          </div>
          <p className="experience pt-5">
            I am passionate about using my skills to create digital experiences
            that make a difference, and I am excited to continue to grow and
            evolve as a designer.
          </p>
          <div>
            <div className="text-center">
              <button className="footer_btn me-3">View Case Studies</button>
              <button className="footer_btn">View UI Designs</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-1"></div>
      <div className="footer_bg section "></div>

      <div className="Row footer-section">
        <div className="col-md-6 p-6 footer_bg ">
          <div className="">
            <div className="main-title text-center text-white">
              <h1 className="footer_font pt-5">Case Studies</h1>
            </div>
            <p className="experience pt-5">
              I am passionate about using my skills to create digital
              experiences that make a difference, and I am excited to continue
              to grow and evolve as a designer
            </p>
            <div>
              <div className="text-center">
                <button className="footer_btn me-3">View Case Studies</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-6 footer_bg1">
          <div>
            <div className="main-title text-center text-white">
              <h1 className="footer_font  pt-5">Visual Design</h1>
            </div>
            <p className="experience pt-5">
              I am passionate about using my skills to create digital
              experiences that make a difference, and I am excited to continue
              to grow and evolve as a designer.
            </p>
            <div>
              <div className="text-center">
                <button className="footer_btn">View UI Designs</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NextSection;
