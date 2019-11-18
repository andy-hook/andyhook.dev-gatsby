import styled from "styled-components"
import { mq } from "@style/media-queries"

export const GutterContainer = styled.div`
  padding-left: 5%;
  padding-right: 5%;

  ${mq.between("topThumb", "bottomUltra")`
    padding-left: 10%;
    padding-right: 10%;
  `}

  width: 100%;
`
