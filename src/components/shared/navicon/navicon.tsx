import React, { memo } from "react"
import styled, { css } from "styled-components"
import { borderRadius, darkGrey, lightGrey } from "@style/variables"
import { isTheme } from "@style/theme"

interface Props {
  open?: boolean
  onClick: () => void
}

const Navicon: React.FunctionComponent<Props> = memo(({ onClick, open }) => {
  return <NaviconContainer onClick={onClick} open={open} />
})

const openStyles = css`
  background-color: ${isTheme("dark", lightGrey(500), darkGrey(400))};
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

    background-color: ${isTheme("dark", darkGrey(400), lightGrey(500))};

    ${props => props.open && openStyles}
  }
`

export default Navicon
