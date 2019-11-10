import styled, { css } from "styled-components"
import { borderRadius, zIndex } from "@style/variables"
import { themeTone, themeText } from "@style/theme"
import { Props } from "./navicon"

export const openStyles = css`
  background-color: ${themeTone(600)};
`

export const NaviconContainer = styled.button<Props>`
  position: relative;

  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 4.5em;

  width: 1em;
  height: 1em;

  &::after {
    content: "";

    opacity: 0;

    position: absolute;

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    border-radius: ${borderRadius.circle};

    background-color: ${themeTone(400)};

    ${props => props.open && openStyles}

    z-index: ${zIndex.floor};
  }
`

export const BarsSVG = styled.svg`
  display: block;

  font-size: 0.425em;

  height: 1em;
  width: 1em;

  margin-bottom: -0.05em;

  z-index: ${zIndex.low};

  & rect {
    fill: ${themeText(500)};
  }
`
