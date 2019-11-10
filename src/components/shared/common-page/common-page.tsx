import React, { memo, ReactNode } from "react"
import Limiter from "@components/shared/limiter/limiter"
import Footer from "@components/shared/footer/footer"
import Gutter from "@components/shared/gutter/gutter"
import * as S from "./common-page.style"

interface Props {
  children: ReactNode
}

const CommonPage: React.FunctionComponent<Props> = memo(({ children }) => (
  <S.Container>
    <Gutter>
      <Limiter>{children}</Limiter>
    </Gutter>
    <Footer />
  </S.Container>
))

export default CommonPage
