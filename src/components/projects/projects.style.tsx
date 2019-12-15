import styled from "styled-components"
import { scaleBetween, scaleGreaterThan } from "@style/media-queries"

export const TitleLimiter = styled.div`
  max-width: 20rem;
  margin-bottom: 2.5rem;

  ${scaleBetween("max-width", "20rem", "60rem", "topThumb", "bottomUltra")}
  
  ${scaleBetween(
    "margin-bottom",
    "2.5rem",
    "7.5rem",
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("max-width", "60rem", "topUltra")}
  ${scaleGreaterThan("margin-bottom", "7.5rem", "topUltra")}
`
