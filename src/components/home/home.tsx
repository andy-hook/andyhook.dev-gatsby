import React, { memo, ReactNode } from "react"
import ContentScrollContainer from "@components/shared/content-scroll/content-scroll.container"

interface Props {
  children: ReactNode
}

const Home: React.FunctionComponent<Props> = memo(({ children }) => {
  return <ContentScrollContainer>{children}</ContentScrollContainer>
})

export default Home
