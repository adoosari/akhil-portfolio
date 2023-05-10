import React from "react";


function IdeationDetails({ heading, details }) {
  return (
    <div className="features-details card">
      <div>
        <h1 className="company box-header">{heading}</h1>
        <p className="small-text box-body">{details}</p>
      </div>
    </div>
  );
}


function Ideation() {

  const ideaOneHeading = "idea1";
  const ideaTwoHeading = "idea2";
  const ideaThreeHeading = "idea3";
  const ideaFourHeading = "idea4";
  const ideaOneDetails = "Adding a feature to NJ Transit app to provide updates along with scheduled";
  const ideaTwoDetails = "Adding a feature to NJ Transit app to provide updates along with scheduled";
  const ideaThreeDetails = "Adding a feature to NJ Transit app to provide updates along with scheduled";
  const ideaFourDetails = "Adding a feature to NJ Transit app to provide updates along with scheduled";



  return (
    <>
      <div className="features-section section">
        <div className="text-center">
          <h1 className="features-title"> Ideation </h1>
        </div>
        <div className="feature">
          <IdeationDetails
            heading={ideaOneHeading}
            details={ideaOneDetails}
          />
          <IdeationDetails
            heading={ideaTwoHeading}
            details={ideaTwoDetails}
          />
        </div>
        <div className="feature">
          <IdeationDetails
            heading={ideaThreeHeading}
            details={ideaThreeDetails}
          />
          <IdeationDetails
            heading={ideaFourHeading}
            details={ideaFourDetails}
          />
        </div>
      </div>
      <div className="features-section section">
        <div className="text-left">
          <h1 className="features-title"> Target Audience </h1>
          <div>
            <p className="small-text">
              <ul>
                <li>Regular travelers from/to Port Authority and New Jersey.</li>
                <li>All age groups above 14</li>
              </ul></p>
          </div>
        </div>
      </div>
      <div className="features-section section">
        <div className="text-left">
          <h1 className="features-title"> Goals </h1>
          <div>
            <p className="small-text">
              <ul>
                <li>Updating the Gate Numbers in NJ Transit App along with live tracking.</li>
                <li>Redesigning the UI for the better visualization</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

    </>
  );
}

export default Ideation;
