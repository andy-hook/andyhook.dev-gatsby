import React, { memo, ReactNode } from "react"
import Footer from "@components/shared/footer/footer"
import * as S from "./common-page.style"

interface Props {
  children: ReactNode
}

const CommonPage: React.FunctionComponent<Props> = memo(({ children }) => (
  <S.Container>
    {children}
    <Footer />
  </S.Container>
))

export default CommonPage
