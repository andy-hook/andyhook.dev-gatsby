/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

// import { graphql, useStaticQuery } from "gatsby"
import React, { ReactNode } from "react"
// import { SiteData } from "../types"
import GlobalStyle from "./global-style"
import { Normalize } from "styled-normalize"

interface Props {
  children: ReactNode
}

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  // const data: SiteData = useStaticQuery(graphql`
  //   query {
  //     allSiteJson {
  //       edges {
  //         node {
  //           title
  //           author
  //           description
  //         }
  //       }
  //     }
  //   }
  // `)

  // const { title } = data.allSiteJson.edges[0].node

  return (
    <>
      <Normalize />
      <GlobalStyle />
      {children}
    </>
  )
}

export default Layout
