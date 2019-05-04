/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { ReactNode } from "react"
import GlobalStyle from "@style/global-style"
import LoaderContainer from "./loader/loader-container"
import Link from "gatsby-plugin-transition-link"

interface Props {
  children: ReactNode
}

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Link to="/">GO HOME</Link>
      <Link to="/brandwatch">GO BRANDWATCH</Link>
      <GlobalStyle />
      <LoaderContainer />
      {children}
    </>
  )
}

export default Layout
