/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { ReactNode, memo } from "react"
import GlobalStyle from "@style/global-style"
import LoaderContainer from "@components/shared/loader/loader.container"
import TopbarContainer from "@components/shared/topbar/topbar.container"
import MenuContainer from "@components/shared/menu/menu.container"
import { ThemeProvider } from "styled-components"
import { darkTheme } from "@style/theme"

interface Props {
  children: ReactNode
}

const Layout: React.FunctionComponent<Props> = memo(({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <GlobalStyle />
        <LoaderContainer />
        <TopbarContainer />
        <MenuContainer />
        {children}
      </>
    </ThemeProvider>
  )
})

export default Layout
