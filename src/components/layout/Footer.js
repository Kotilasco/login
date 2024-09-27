import { Link } from "react-router-dom";
import "../../css/footer.css";
import LogoSvg from "../../svg/LogoSvg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="footer_top_1">
          <Link to="/ ">
            <LogoSvg />
          </Link>
        </div>
        <div className="footer_top_2">
          <h3>What we do</h3>
          <ul>
            <li>
              <Link to="#">Student Information System</Link>
            </li>
            <li>
              <Link to="#">Institute Administration</Link>
            </li>
            <li>
              <Link to="#">Student Performance Management</Link>
            </li>
            <li>
              <Link to="#">Communication</Link>
            </li>
          </ul>
        </div>
        <div className="footer_top_3">
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/about" target="_blank" rel="noreferrer">
                About us
              </Link>
            </li>
            <li>
              <Link to="/privacy" target="_blank" rel="noreferrer">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/terms" target="_blank" rel="noreferrer">
                Terms of service
              </Link>
            </li>
            <li>
              <Link to="/contact" target="_blank" rel="noreferrer">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        <Link to="/">Brainstake eSchools</Link>
        <span>&nbsp;&copy; 2024 | All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
