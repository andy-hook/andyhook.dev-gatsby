import React, { memo } from "react"
import styled from "styled-components"

interface Props {
  open?: boolean
}

const Menu: React.FunctionComponent<Props> = memo(({ open }) => {
  return <MenuContainer open={open} />
})

const MenuContainer = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background-color: white;

  ${({ open }) =>
    open &&
    `
    background-color: blue;
  `}
`

export default Menu
