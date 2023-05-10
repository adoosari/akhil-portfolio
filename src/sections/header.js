import { Link } from "react-router-dom";
import DropDownMenu from "./dropDown";


function Header() {
    return (
        <>
            <div className="nav-bar">
                <div>
                    <Link to={'/'}> Akhil D</Link>
                    <div className="d-inline-flex align-items-center" >
                        <DropDownMenu />

                        <a href="#" className="resume-link">
                            Resume
                        </a>

                    </div>
                </div>
            </div>
        </>

    );
}

export default Header;