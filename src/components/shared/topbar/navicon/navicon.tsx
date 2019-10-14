import React, { memo } from "react"
import styled, { css } from "styled-components"
import { borderRadius } from "@style/variables"
import { themeTone } from "@style/theme"
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
      />
    )
  }
)

const openStyles = css`
  background-color: ${themeTone(600)};
`

const NaviconContainer = styled.button<Props>`
  position: relative;
  font-size: 1em;

  width: 1em;
  height: 1em;

  &::after {
    content: "";

    position: absolute;

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    border-radius: ${borderRadius.circle};

    background-color: ${themeTone(400)};

    ${props => props.open && openStyles}
  }
`

export default Navicon
