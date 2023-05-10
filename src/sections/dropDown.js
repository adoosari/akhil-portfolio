import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


function DropDownMenu() {
    return (
        <Dropdown>
            <Dropdown.Toggle className="resume-link drop-down-toggle"  id="dropdown-basic">
                Works
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item className="text-dark" as={Link} to="/mobile">NJ</Dropdown.Item>
                <Dropdown.Item className="text-dark" as={Link} to="/meditation">Meditaion VR</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDownMenu;