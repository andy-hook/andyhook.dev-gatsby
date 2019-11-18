import React, { memo, ReactNode } from "react"
import Footer from "@components/shared/footer/footer"
import * as S from "./common-page.style"
import PageContainer from "@components/shared/page/page.container"

interface Props {
  children: ReactNode
}

const CommonPage: React.FunctionComponent<Props> = memo(({ children }) => (
  <PageContainer>
    <S.Container>
      {children}
      <Footer />
    </S.Container>
  </PageContainer>
))

export default CommonPage
