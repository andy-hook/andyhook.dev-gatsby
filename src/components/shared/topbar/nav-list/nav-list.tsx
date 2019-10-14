import React, { memo } from "react"
import Link from "gatsby-plugin-transition-link"

const NavList: React.FunctionComponent = memo(() => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" activeClassName="active" partiallyActive={true}>
            Overview
          </Link>
        </li>
        <li>
          <Link to="/projects" activeClassName="active" partiallyActive={true}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active" partiallyActive={true}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
})

export default NavList
