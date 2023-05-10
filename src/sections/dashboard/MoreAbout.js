
import img1 from "../../assets/62e42d258f9346256aecfc95_ux.svg.jpg";
import img2 from "../../assets/62e42d55bcd1060fd0a8d893_ui.svg (1).png";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/image 2.png";
import img7 from "../../assets/image3.png";
import img8 from "../../assets/image4.png";
import img9 from "../../assets/im1.jpg";
import img10 from "../../assets/im2.png";
import img11 from "../../assets/im3.png";
import img12 from "../../assets/im4.jpg";
import img13 from "../../assets/img13.png";
import img14 from "../../assets/img14.png";
import img15 from "../../assets/img15.png";


function MoreAbout() {
  return (
    <div>
      <div className="main-more row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <h1 className="more-about">More about me</h1>
          <h4 className="skills">Skills</h4>
          <p>
            I’m a full stack designer, I can see the product design process all
            the way through, from identifying the problem to defining the UX,
            applying the UI and even engineering(in webflow).
          </p>
          <div className="d-flex flex-column">
            <span className="clr">Skills</span>
            <span className="clr">Tools</span>
          </div>
        </div>

        <div className="ux-design col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <div>
            <img src={img1} alt="" />
            <h4 className="clr">UX Design</h4>
            <p>
              Determining flows, architecture, navigation and layouts are some
              of my favorite steps of the design process. These are the aspects
              of a product that really determine its usability, and I love the
              challenge involved in that work.
            </p>
          </div>

          <div>
            <img src={img2} alt="" />
            <h4 className="clr">UI Design</h4>
            <p>
              I design clean, cohesive interfaces that align to brand guidelines
              and help to focus the User's attention. I want to make it easy and
              efficient for people to accomplish their goals, and hopefully
              enjoy themselves along the way.
            </p>
          </div>

          <div>
            <img src={img3} alt="" />
            <h4 className="clr">Interaction Design</h4>
            <p>
              Interaction design can be the cherry on top of the product, but it
              can also play an essential role in the User's understanding of an
              action or state. Whether it's for flourish or function, I can
              prototype the interaction in Principle, Figma and Webflow.
            </p>
          </div>

          <div>
            <img src={img4} alt="" />
            <h4 className="clr">Webflow</h4>
            <p>
              Webflow is awesome! I used it to build this website from scratch -
              everything from the interactions to the layouts are custom.
            </p>
          </div>

          <div>
            <img src={img5} alt="" />
            <h4 className="clr">Leadership</h4>
            <p>
              I'm growing increasingly interested in fostering others' careers
              and skillsets. I think a strong leader not only provides
              constructive feedback, but also regularly seeks feedback, always
              looking for ways to improve processes, dynamics and the general
              wellbeing of their team.
            </p>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <h2 className="clr">Tools</h2>
            <h5 className="clr pt-3">UIUX Tools</h5>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="pt-5">
              <p>Designing Tools</p>
              <div className="d-flex gap-5">
                <div>
                  <img src={img6} alt="" />
                  <p className="clr">Sketch</p>
                </div>
                <div>
                  <img src={img7} alt="" />
                  <p className="clr">Figma</p>
                </div>
                <div>
                  <img src={img8} alt="" />
                  <p className="clr">Adobe XD</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p>Prototyping Tools</p>
              <div className="d-flex gap-5">
                <div>
                  <img src={img9} alt="" />
                  <p className="clr">InVision</p>
                </div>
                <div>
                  <img src={img10} alt="" />
                  <p className="clr">Zepline</p>
                </div>
                <div>
                  <img src={img11} alt="" />
                  <p className="clr">Marvel</p>
                </div>
                <div>
                  <img src={img12} alt="" />
                  <p className="clr">Axure</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p>Research Tools</p>
              <div className="d-flex gap-5">
                <div>
                  <img src={img13} alt="" />
                  <p className="clr">UserTesting</p>
                </div>
                <div>
                  <img src={img14} alt="" />
                  <p className="clr">User Interviews</p>
                </div>
                <div>
                  <img src={img15} alt="" />
                  <p className="clr">Mural</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MoreAbout;
