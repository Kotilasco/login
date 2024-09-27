import { Link } from "react-router-dom"
import LogoSvg from "../../svg/LogoSvg"
import '../../css/nav.css'
import { useState } from "react"

const Nav = () => {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false)
    const styles = {
      hamburger_styles: {
        backgroundImage: `url('images/${isMobileMenuVisible ? 'close_' : ''}hamburger_wt.png')`,
        backgroundSize: '70%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }

    const {hamburger_styles} = styles

    return (
      <div className="nav">
        <div className="left">
          <Link to="/"><LogoSvg /></Link>
          <button className="hamburger" style={hamburger_styles}
            onClick={(e) => {
              e.target.parentElement.parentElement.querySelector(".right").classList.toggle("displayed_flex")
              setIsMobileMenuVisible(!isMobileMenuVisible)
            }}
          ></button>
        </div>
        <div className="right">
          <Link to="/raise_an_enquiry_styles" className="link_styles raise_an_enquiry_styles">Raise an enquiry</Link>
          <Link to="/enrol_your_school" className="link_styles enrol_your_school_styles">Enrol your school</Link>
          <Link to="/login" className="link_styles login_styles">Login</Link>
        </div>
      </div>
    )
}

export default Nav