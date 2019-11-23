import React, { memo } from "react"
import Footer from "@components/shared/footer/footer"
import * as S from "./common-page.style"
import PageContainer from "@components/shared/page/page.container"

const CommonPage: React.FunctionComponent = memo(({ children }) => (
  <PageContainer>
    <S.Container>
      {children}
      <Footer />
    </S.Container>
  </PageContainer>
))

export default CommonPage
