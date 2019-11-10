import heroBg from "@images/hero-bg.svg"

import "@style/fonts.css"
import styled from "styled-components"
import { themeTone, themeToneAlpha } from "@style/theme"
import { zIndex } from "@style/variables"
import { mq, scaleBetween, scaleGreaterThan } from "@style/media-queries"
import { rem } from "polished"

export const SiteWrapper = styled.div`
  background-color: ${themeTone(200)};
`

export const TopbarEdgeGradient = styled.div`
  position: fixed;

  z-index: ${zIndex.medium};

  pointer-events: none;

  top: 0;
  left: 0;
  width: 100%;

  background: linear-gradient(
    1deg,
    ${themeToneAlpha(100, 0)} 20%,
    ${themeToneAlpha(100, 0.95)} 80%,
    ${themeToneAlpha(100, 1)} 100%
  );

  height: ${rem("150px")};

  ${scaleBetween(
    "height",
    rem("100px"),
    rem("250px"),
    "topThumb",
    "bottomDesk"
  )}

  ${mq.between("topDesk", "bottomUltra")`
    height: ${rem("250px")};
  `}

  ${scaleGreaterThan("height", rem("250px"), "topUltra")}
`

export const SiteTexture = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: url(${heroBg}) repeat top left;

  z-index: ${zIndex.floor};

  ${mq.greaterThan("topWall")`
    background-size: 35%;
  `}
`
