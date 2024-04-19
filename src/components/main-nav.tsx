import React from "react"
import { Link } from "gatsby"

const MainNav = ({ navLinks }) => {
  return (
    <nav className="main-nav">
      <div className="content-box">
        <ul className="main-nav--items">
          {navLinks.map((link: any, key: string) => (
            <li key={key}>
              <Link
                to={link.link}
                title={link.name}
                className="main-nav--item"
                activeClassName="main-nav--item__active"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default MainNav
