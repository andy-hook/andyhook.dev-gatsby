import React, { memo } from "react"
import styled, { css } from "styled-components"
import { borderRadius, zIndex } from "@style/variables"
import { themeTone, themeText } from "@style/theme"
import classNames from "classnames"

interface Props {
  open?: boolean
  className?: string
  onClick: () => void
}

const Navicon: React.FunctionComponent<Props> = memo(
  ({ onClick, open, className }) => {
    return (
      <NaviconContainer
        className={classNames("", className)}
        onClick={onClick}
        open={open}
      >
        <BarsSVG viewBox="0 0 23 9">
          <rect width="23" height="2" />
          <rect y="7" width="23" height="2" />
        </BarsSVG>
      </NaviconContainer>
    )
  }
)

const openStyles = css`
  background-color: ${themeTone(600)};
`

const NaviconContainer = styled.button<Props>`
  position: relative;

  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 4em;

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

const BarsSVG = styled.svg`
  display: block;

  font-size: 0.425em;

  height: 0.4em;
  width: 1em;

  margin-bottom: -0.1em;

  z-index: ${zIndex.low};

  & rect {
    fill: ${themeText(500)};
  }
`

export default Navicon
