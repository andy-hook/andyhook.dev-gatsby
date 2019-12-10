import React, { memo } from "react"
import Button from "@components/shared/button/button"
import * as S from "./details.style"
import SplitText from "@components/shared/split-text/split-text"

interface Props {
  buttonHref: string
  visible: boolean
}

const Details: React.FunctionComponent<Props> = memo(
  ({ buttonHref, visible }) => {
    return (
      <S.DetailsContainer>
        <S.Title>
          <SplitText visible={visible}>
            I design & build beautiful digital interfaces
          </SplitText>
        </S.Title>
        <Button href={buttonHref}>View my latest projects</Button>
      </S.DetailsContainer>
    )
  }
)

export default Details
