import React, { memo } from "react"
import styled from "styled-components"
import { borderRadius } from "@style/variables"

interface Props {
  open?: boolean
  onClick: () => void
}

const Navicon: React.FunctionComponent<Props> = memo(({ open, onClick }) => {
  return <NaviconContainer onClick={onClick} />
})

const NaviconContainer = styled.button`
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

    background-color: grey;
  }
`

export default Navicon
