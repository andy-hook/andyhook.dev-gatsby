import styled from "styled-components"
import { mq } from "@style/media-queries"

export const GutterContainer = styled.div`
  ${mq.lessThan("topUltra")`
    padding-left: 10%;
    padding-right: 10%;
  `}

  width: 100%;
`
