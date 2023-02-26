import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar_container">
      <div>
        <Link to="/" className="link_items">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website_logo"
          />
        </Link>
      </div>
      <ul className="header-list-items">
        <Link to="/" className="link_items">
          <li className="home-heading home">Home</li>
        </Link>
        <Link to="/jobs" className="link_items">
          <li className="jon-heading home">Jobs</li>
        </Link>
      </ul>
      <li>
        <button type="button" className="logout_btn" onClick={onClickLogout}>
          Logout
        </button>
      </li>
    </nav>
  )
}

export default withRouter(Header)
