import sketch1 from "../../../assets/meditaion/sketch1.png"
import sketch2 from "../../../assets/meditaion/sketch2.png"
import sketch3 from "../../../assets/meditaion/sketch3.png"
import loginFlow from "../../../assets/meditaion/LoginFlow.png"
import siteMap from "../../../assets/meditaion/siteMap.png"


function Designs(){
    return(
        <>
            <div className="features-section section">
                <div className="text-left">
                    <h1 className="project-details-title"> Sketch</h1>
                    <div >
                        <img src={sketch1} alt="sketch"/>
                        <img className="img-margin-left" src={sketch2} alt="sketch"/>
                        <img className="img-margin-left" src={sketch3} alt="sketch"/>
                    </div>
                </div>
            </div>
            <div className="features-section section">
                <div className="text-left">
                    <h1 className="project-details-title"> Login Flow</h1>
                    <div >
                    <img src={loginFlow} alt="Login Flow"/>
                    </div>
                </div>
            </div>
            <div className="features-section section">
                <div className="text-left">
                    <h1 className="project-details-title"> Site Map</h1>
                    <div >
                    <img className="img-site-map" src={siteMap} alt="Site Map"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Designs;