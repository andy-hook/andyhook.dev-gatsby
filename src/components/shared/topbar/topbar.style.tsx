import styled, { css } from "styled-components"
import { rem } from "polished"
import { scaleBetween, scaleGreaterThan, mq } from "@style/media-queries"
import { zIndex, borderThickness, ease } from "@style/variables"
import { typeSizeBaseXs } from "@style/typography"
import { themeTone } from "@style/theme"
import { menuZindex } from "../menu/menu.style"

interface StyleProps {
  hasScrolled?: boolean
  visible?: boolean
}

const spacingXSmall = rem("25px")
const spacingXBig = rem("35px")

const topbarHeight = css`
  height: ${rem("65px")};

  ${scaleBetween("height", rem("65px"), rem("85px"), "topThumb", "bottomUltra")}

  ${scaleGreaterThan("height", rem("85px"), "topUltra")}
`

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

const visiblityTransition = styled.div<StyleProps>`
  ${topbarFixed}

  transition: transform 1.5s ${ease("easeOutCirc")};

  transform: translate3d(0, -100%, 0);

  ${props =>
    props.visible &&
    css`
      transform: translate3d(0, 0, 0);
    `}
`

export const Over = styled(visiblityTransition)`
  ${topbarHeight}
  ${paddingX}

  display: flex;
  align-items: center;

  justify-content: flex-end;

  z-index: ${menuZindex + 1};

  mix-blend-mode: difference;
  pointer-events: none;

  ${mq.greaterThan("topPalm")`
    justify-content: flex-start;
  `}
`

export const Under = styled(visiblityTransition)`
  z-index: ${menuZindex - 1};
`

export const ContainerInner = styled.div<StyleProps>`
  ${topbarHeight}
  ${paddingX}

  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Background colour */
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

    opacity: 1;
  }

  /* Underline */
  &::after {
    transition: opacity 0.2s ease;

    content: "";
    position: absolute;

    bottom: 0;
    left: 0;

    width: 100%;
    height: ${borderThickness.regular};
    background-color: ${themeTone(600)};

    z-index: ${zIndex.low};
  }
`

export const LogoPos = styled.div`
  z-index: ${zIndex.medium};

  font-size: ${rem("65px")};

  ${mq.greaterThan("topPalm")`
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

  ${mq.greaterThan("topPalm")`
    margin-left: -1.25em;
  `}
`

export const HideOffsetHolder = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;

  pointer-events: none;

  z-index: ${menuZindex - 1};

  height: ${rem("100px")};

  ${scaleBetween(
    "height",
    rem("65px"),
    rem("300px"),
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("height", rem("300px"), "topUltra")}
`
