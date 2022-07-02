import OutlineButton from "./OutlineButton"
import TextButton from "./TextButton"
import { Link, useLocation } from "react-router-dom"
const Header = () => {
  const location = useLocation()

  return (
    <div className="header">
      <div className="header__layer-1">
        <ul>
          <li>Tentang Kami</li>
          <li>FAQ</li>
          <li>Karir</li>
          <li>Blog</li>
        </ul>
      </div>
      {location.pathname != "/register" && (
        <div className="header__layer-2">
          <ul className="header__layer-2__left">
            <li>
              <img src="/logo.png" alt="icon" />
            </li>
            <li>Informasi</li>
            <li>Cleaning</li>
            <li>Insurance</li>
          </ul>
          <ul className="header__layer-2__right">
            <li>
              <Link to={"/login"}><OutlineButton label="Masuk" className="outline-button" /></Link>
            </li>
            <li>
              <Link to={"/register"}><TextButton label="Register" className="text-button" /></Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Header
