import styled, { css } from "styled-components"
import { rem } from "polished"
import { scaleBetween, scaleGreaterThan, mq } from "@style/media-queries"
import { zIndex, borderThickness } from "@style/variables"
import { typeSizeBaseXs } from "@style/typography"
import { themeText, themeTone } from "@style/theme"

const spacingXSmall = rem("25px")
const spacingXBig = rem("40px")

const topbarHeight = css`
  height: ${rem("65px")};

  ${scaleBetween("height", rem("65px"), rem("90px"), "topThumb", "bottomUltra")}

  ${scaleGreaterThan("height", rem("90px"), "topUltra")}
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

  transition: transform 0.5s ease;

  display: flex;
  align-items: center;

  justify-content: flex-end;

  z-index: ${topbarZindex + 1};

  mix-blend-mode: difference;
  pointer-events: none;

  ${mq.greaterThan("bottomPalm")`
    justify-content: flex-start;
  `}

  &.is-visible {
    transform: translate3d(0,0,0)
  }

  &.is-hidden {
    transform: translate3d(0,-100%,0)
  }
`

export const Under = styled.div`
  ${topbarFixed}

  transition: transform 0.5s ease;

  z-index: ${topbarZindex};

  &.is-visible {
    transform: translate3d(0, 0, 0);
  }

  &.is-hidden {
    transform: translate3d(0, -100%, 0);
  }
`

export const ContainerInner = styled.div`
  position: relative;

  ${topbarHeight}
  ${paddingX}

  display: flex;
  justify-content: space-between;
  align-items: center;

  &::before {
    transition: opacity 0.2s ease;

    content: "";

    position: absolute;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: ${themeTone(200)};

    z-index: ${zIndex.floor};

    opacity: 0;
  }

  &.has-scrolled::before {
    opacity: 1;
  }

  &::after {
    content: "";
    position: absolute;

    bottom: 0;
    left: 0;

    width: 100%;
    height: ${borderThickness.regular};
    background-color: ${themeText(100)};

    opacity: 0.075;

    z-index: ${zIndex.low};
  }
`

export const LogoPos = styled.div`
  z-index: ${zIndex.medium};

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
  z-index: ${zIndex.medium};
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
    rem("150px"),
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("height", rem("150px"), "topUltra")}
`
