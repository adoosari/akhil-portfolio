import design1 from "../../../assets/NJ/design1.png"
import design2 from "../../../assets/NJ/design2.png"
import design3 from "../../../assets/NJ/design3.png"
import design4 from "../../../assets/NJ/design4.png"



function Design() {
    return (
        <div className="features-section section">
            <div className="text-center">
                <h1 className="features-title"> Example Page Designs </h1>
                <div>
                    <img src={design1} alt="sketch" />
                    <img className="img-margin-left-nj" src={design2} alt="sketch" />
                    <img className="img-margin-left-nj" src={design3} alt="sketch" />
                    <img className="img-margin-left-nj" src={design4} alt="sketch" />

                </div>
            </div>
        </div>
    );
}

export default Design;