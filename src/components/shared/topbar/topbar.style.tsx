import styled, { css } from "styled-components"
import { rem } from "polished"
import { scaleBetween, scaleGreaterThan, mq } from "@style/media-queries"
import { zIndex } from "@style/variables"
import { typeSizeBaseXs } from "@style/typography"

const spacingXSmall = rem("25px")
const spacingXBig = rem("45px")

const topbarHeight = css`
  height: ${rem("65px")};

  ${scaleBetween("height", rem("65px"), rem("95px"), "topThumb", "bottomUltra")}

  ${scaleGreaterThan("height", rem("95px"), "topUltra")}
`

const topbarZindex = zIndex.highest

const topbarFixed = css`
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
`

const paddingX = css`
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
  ${topbarFixed}
  ${topbarHeight}
  ${paddingX}

  display: flex;
  align-items: center;

  justify-content: flex-end;

  z-index: ${topbarZindex + 1};

  mix-blend-mode: difference;
  pointer-events: none;

  ${mq.greaterThan("bottomPalm")`
    justify-content: flex-start;
  `}
`

export const Under = styled.div`
  ${topbarFixed}

  z-index: ${topbarZindex};
`

export const ContainerInner = styled.div`
  ${topbarHeight}
  ${paddingX}

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoPos = styled.div`
  font-size: ${rem("65px")};

  ${mq.greaterThan("bottomPalm")`
    margin-left: 0.7em;
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

export const HideOffsetHolder = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;

  pointer-events: none;

  z-index: ${topbarZindex - 1};

  height: ${rem("65px")};

  ${scaleBetween(
    "height",
    rem("65px"),
    rem("250px"),
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("height", rem("250px"), "topUltra")}
`
