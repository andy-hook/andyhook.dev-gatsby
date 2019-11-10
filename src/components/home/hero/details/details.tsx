import React, { memo } from "react"
import Button from "@components/shared/button/button"
import * as S from "./details.style"

interface Props {
  buttonHref: string
}

const Details: React.FunctionComponent<Props> = memo(({ buttonHref }) => {
  return (
    <S.DetailsContainer>
      <S.Title>I design & build beautiful digital interfaces</S.Title>
      <Button href={buttonHref}>View my latest projects</Button>
    </S.DetailsContainer>
  )
})

export default Details
