import { Link, useLocation, useNavigate } from "react-router-dom";


function Footer() {
    const location = useLocation();
    const navigate = useNavigate();
    const handleRoute = () => {
        console.log(location.pathname);
        if (location.pathname === '/mobile') {
            navigate('/meditation');
        } else {
            navigate('/mobile');
        }
    }

    return (
        <>
            <div className="footer-left">
                <div className="footer-left-round text-center">
                    <Link to="/dashboard">
                        <button className="footer-btn" as={Link} to="/"> Home </button>
                    </Link>
                </div>
            </div>
            <div className="footer-right text-center">
                <button className="footer-btn" onClick={handleRoute}>Next Project</button>
            </div>
        </>
    );
}

export default Footer;