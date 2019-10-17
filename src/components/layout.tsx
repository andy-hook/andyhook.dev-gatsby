import React, { ReactNode, memo } from "react"
import GlobalStyle from "@style/global-style"
import LoaderContainer from "@components/shared/loader/loader.container"
import TopbarContainer from "@components/shared/topbar/topbar.container"
import MenuContainer from "@components/shared/menu/menu.container"
import heroBg from "@images/hero-bg.svg"

import "@style/fonts.css"
import styled, { ThemeProvider } from "styled-components"
import { themes, themeTone } from "@style/theme"
import { zIndex } from "@style/variables"
import { mq } from "@style/media-queries"

interface Props {
  children: ReactNode
}

const Layout: React.FunctionComponent<Props> = memo(({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themes.dark}>
        <SiteWrapper>
          <LoaderContainer />
          <TopbarContainer />
          <MenuContainer />
          {children}
          <SiteTexture />
        </SiteWrapper>
      </ThemeProvider>
    </>
  )
})

const SiteWrapper = styled.div`
  background-color: ${themeTone(200)};
`

const SiteTexture = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: url(${heroBg}) repeat top left;

  z-index: ${zIndex.floor};

  ${mq.greaterThan("topWall")`
    background-size: 35%;
  `}
`

export default Layout
