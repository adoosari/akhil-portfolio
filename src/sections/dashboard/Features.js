import React from "react";

function Box({ color }) {
  return (
    <div className="features-section-box">
      <div className="box" style={{ backgroundColor: color }}></div>
    </div>
  );
}
function FeatureDetails({ company, role, period, roleDetail, description }) {
  return (
    <div className="features-details">
      <div>
        <h1 className="company">{company}</h1>
        <div className="role-period">
          <span className="small-text">{role}</span>
          <span className="small-text">{period}</span>
        </div>
        <p className="small-text">{roleDetail}</p>
        <button className="learn-more-btn">Learn More</button>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="features-section section">
      <div className="text-center">
        <h1 className="features-title">Feature Roles</h1>
      </div>
      <div className="feature">
        <FeatureDetails
          company={"Verizon"}
          role={"Senior UI/UX Designer"}
          period={"January 2021 - September 2022"}
          roleDetail={
            "Lead designer for the 5G gateway installation for internal and external products,"
          }
          description={
            "Wireframe and design the business requirments on the client side and working closely with the development team to get the design output"
          }
        />
        <Box color={"#F7FFD8"} />
      </div>
      <div className="feature">
        <Box color={"#CFFFF4"} />
        <FeatureDetails
          company={"Sagiam Ltd"}
          role={"UI/UX Designer"}
          period={"September 2021 - January 2022"}
          roleDetail={
            "I have worked with various clients, catering to their UX requirements."
          }
          description={
            "Collaborated with cross-functional teams to develop user-centered designs that aligned with business objectives."
          }
        />
      </div>
      <div className="feature">
        <FeatureDetails
          company={"Telebu Communications"}
          role={"Senior UI/UX Designer"}
          period={"January 2021 - September 2022"}
          roleDetail={
            "User Research and Designing the Telebu products (Telebu Ping,Telebu Join,Grptalk and Tabiib) with the team of 4."
          }
          description={
            "Working as UI designer on the prodapt applications in the CRM platform with the new updated features and revamping the old design"
          }
        />
        <Box color={"#FFEDCA"} />
      </div>
    </div>
  );
}

export default Features;
