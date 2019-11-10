import styled from "styled-components"
import { scaleBetween, scaleGreaterThan } from "@style/media-queries"
import {
  typeScale,
  fontWeight,
  fontFamily,
  borderRadius,
  duration,
  zIndex,
  lightGreyHSL,
  lineHeight,
} from "@style/variables"

import { OutboundLink } from "gatsby-plugin-google-analytics"

export const StyledButton = styled(OutboundLink)`
  position: relative;

  overflow: hidden;
  font-family: ${fontFamily.display};

  color: ${`hsl(${lightGreyHSL[100]})`};

  font-weight: ${fontWeight.display.bold};

  font-size: ${typeScale[2]};

  border-radius: ${borderRadius.pill};

  text-decoration: none;
  text-shadow: 0 0 0.03em rgba(0, 0, 0, 0.5);

  padding: 1.05em 2.15em;
  background: linear-gradient(160deg, #c700b1 0%, #6609e1 100%);

  &::before,
  &::after {
    transition: opacity ${duration.fast} linear;
    content: "";

    position: absolute;

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    opacity: 0;

    border-radius: ${borderRadius.pill};
  }

  &::before {
    box-shadow: inset 0 -0.25em 1em 0 #c615a8;
    z-index: ${zIndex.medium};
  }

  &::after {
    background: linear-gradient(160deg, #c615a8 0%, #4d0fbe 100%);
    z-index: ${zIndex.low};
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {
    &::before {
      opacity: 0.1;
    }

    &::after {
      opacity: 0.75;
    }
  }

  ${scaleBetween(
    "font-size",
    typeScale[2],
    typeScale[5],
    "bottomThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[5], "topUltra")}
`

export const StyledButtonInner = styled.span`
  display: block;
  position: relative;
  z-index: ${zIndex.medium};

  line-height: ${lineHeight.flat};
`
