// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="nav-bar">
    <li className="icon-holder">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="icon-image"
        alt="wave"
      />
      <p className="icon-name">Wave</p>
    </li>
    <li className="left-margin">
      <Link to="/" className="icon-name">
        Home
      </Link>
    </li>
    <li>
      <Link to="/about" className="icon-name">
        About
      </Link>
    </li>
    <li>
      <Link to="/contact" className="icon-name">
        Contact
      </Link>
    </li>
  </ul>
)

export default Header
