import React from "react";
import { BsFillBusFrontFill } from "react-icons/bs";
import Header from "../../header";

function ProjectMain() {
  return (
    <div className="footer-section section">
      <Header />
      <div className="">
        <div className="row">
          <div className="mb-5">
            <div className="text-center row">
              <h1 className="col-md-4  text-rt">
                <BsFillBusFrontFill className="text-white icon" />
              </h1>
              <h5 className="col-md-7 heading-txt  algn-self-start text-white text-lt ">
                NJ Transit Mobile <br />
                Application
              </h5>
            </div>
          </div>
        </div>
        <div className="main-title pt-2 text-center text-white">
          <h3 className="case-studies-font pt-3">Background</h3>
        </div>
        <p className="text-white pt-2">
          Went to Port Authority to find the problems faced by the travellers
          and I’m one of the regular traveller from Port Authority to New
          Jersey. <br />
          Found travelers standing in lobby to view their bus onboarding
          time and gate numbers, Most of the travelers arrive Port Authority by
          checking the time in the google maps or NJTransit app. But they need
          to stay few minutes in lobby or Kiosk devices to check the onboarding
          information.
        </p>
        <div className="main-title pt-2 text-center text-white">
          <h3 className="case-studies-font pt-3">Problem </h3>
        </div>
        <p className="text-white pt-2">
          Travelers from the Port Authority NYC are very confused to know the
          boarding gates of their buses as the gate numbers are changed very
          frequently and there is no update on the NJTransit App or Google
          Maps.But we have all live data of the timing, delayed and live
          tracking of the app
        </p>
        <div className="main-title pt-2 text-center text-white">
          <h3 className="case-studies-font pt-3">Objective</h3>
        </div>
        <p className="text-white pt-2">
          To simplify the process of travelers at Port Authority by making it
          simple to locate the gate numbers and finding there buses
        </p>
      </div>
    </div>
  );
}

export default ProjectMain;
