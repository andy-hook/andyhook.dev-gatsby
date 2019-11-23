import React, { memo } from "react"
import Home from "./home"
import PageContainer from "@components/shared/page/page.container"

const HomeContainer: React.FunctionComponent = memo(({ children }) => {
  return (
    <PageContainer>
      <Home>{children}</Home>
    </PageContainer>
  )
})

export default HomeContainer
