import styled from "styled-components"
import { mq, scaleBetween, scaleGreaterThan } from "@style/media-queries"

const modeSwitchBreakpoint = "topLap"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 1fr);

  grid-gap: 2rem;

  ${scaleBetween(
    "grid-gap",
    "1.5rem",
    "4rem",
    modeSwitchBreakpoint,
    "bottomUltra"
  )}

  ${scaleGreaterThan("grid-gap", "4rem", "topUltra")}

  ${mq.greaterThan(modeSwitchBreakpoint)`
    grid-template-columns: 1fr 1fr;
  `}
`

export const GridItem = styled.div`
  ${mq.greaterThan(modeSwitchBreakpoint)`
    &:nth-child(even) {
      ${scaleBetween(
        "margin-top",
        "-12rem",
        "-16rem",
        modeSwitchBreakpoint,
        "bottomWide"
      )}

      ${scaleBetween(
        "margin-top",
        "-16rem",
        "-21rem",
        "topWide",
        "bottomUltra"
      )}

      ${scaleGreaterThan("margin-top", "-21rem", "topUltra")}
    }
  `}
`
