import React, { memo } from "react"
import styled from "styled-components"
import { borderRadius } from "@style/variables"
import { themeTone } from "@style/theme"

interface Props {
  open?: boolean
  onClick: () => void
}

const Navicon: React.FunctionComponent<Props> = memo(({ onClick }) => {
  return <NaviconContainer onClick={onClick} />
})

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
  }
`

export default Navicon
