import styled, { css } from "styled-components"
import { rem } from "polished"
import { scaleBetween, scaleGreaterThan, mq } from "@style/media-queries"
import { zIndex } from "@style/variables"
import { typeSizeBaseXs } from "@style/typography"

export const Container = styled.div`
  position: fixed;
  z-index: ${zIndex.highest};

  top: 0;
  left: 0;
  right: 0;

  mix-blend-mode: difference;
`

export const spacingXSmall = rem("25px")
export const spacingXBig = rem("45px")

export const paddingX = css`
  padding-left: ${spacingXSmall};
  padding-right: ${spacingXSmall};

  ${scaleBetween(
    "padding-left",
    spacingXSmall,
    spacingXBig,
    "topThumb",
    "bottomUltra"
  )}

  ${scaleBetween(
    "padding-right",
    spacingXSmall,
    spacingXBig,
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("padding-left", spacingXBig, "topUltra")}
  ${scaleGreaterThan("padding-right", spacingXBig, "topUltra")}
`

export const Over = styled.div`
  ${paddingX}

  position: absolute;
  display: flex;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  align-items: center;

  justify-content: flex-end;

  z-index: ${zIndex.low};

  pointer-events: none;

  ${mq.greaterThan("bottomPalm")`
    justify-content: flex-start;
  `}
`

export const Under = styled.div`
  position: relative;
  z-index: ${zIndex.floor};
`

export const spacingYSmall = rem("15px")
export const spacingYBig = rem("27px")

export const ContainerInner = styled.div`
  ${paddingX}

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: ${spacingYSmall};
  padding-bottom: ${spacingYSmall};

  ${scaleBetween(
    "padding-top",
    spacingYSmall,
    spacingYBig,
    "topThumb",
    "bottomUltra"
  )}

  ${scaleBetween(
    "padding-bottom",
    spacingYSmall,
    spacingYBig,
    "topThumb",
    "bottomUltra"
  )}
  
  ${scaleGreaterThan("padding-top", spacingYBig, "topUltra")}
  ${scaleGreaterThan("padding-bottom", spacingYBig, "topUltra")}
  
`

export const LogoPos = styled.div`
  font-size: ${rem("65px")};

  ${mq.greaterThan("bottomPalm")`
    margin-left: 0.75em;
  `}

  ${scaleBetween(
    "font-size",
    rem("65px"),
    rem("85px"),
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", rem("85px"), "topUltra")}
`

export const NavPos = styled.div`
  z-index: ${zIndex.highest};
  display: flex;

  align-items: center;
`

export const NaviconSizing = styled.div`
  /* Align scaling with navigation text */
  ${typeSizeBaseXs}

  margin-right: -1.25em;

  pointer-events: auto;

  ${mq.greaterThan("bottomPalm")`
    margin-left: -1.25em;
  `}
`
