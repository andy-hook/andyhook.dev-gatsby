import styled from "styled-components"
import { mq } from "@style/media-queries"

export const GutterContainer = styled.div`
  padding-left: 4%;
  padding-right: 4%;

  ${mq.between("topThumb", "topDesk")`
    padding-left: 6%;
    padding-right: 6%;
  `}

  ${mq.between("bottomDesk", "bottomUltra")`
    padding-left: 9%;
    padding-right: 9%;
  `}

  width: 100%;
`
