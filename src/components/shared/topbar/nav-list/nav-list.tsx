import React, { memo, MutableRefObject } from "react"
import * as S from "./nav-list.style"
import {
  PAGE_LEAVE_DURATION,
  TRANSITION_TYPE_EXIT,
  TRANSITION_TYPE_ENTER,
} from "@constants"

export const linkProps = {
  activeClassName: "active",

  exit: {
    state: {
      animType: TRANSITION_TYPE_EXIT,
    },
    length: PAGE_LEAVE_DURATION, // Should match entry delay
  },
  entry: {
    state: {
      animType: TRANSITION_TYPE_ENTER,
    },
    delay: PAGE_LEAVE_DURATION, // How long the current page should show for before changing scroll position
    length: PAGE_LEAVE_DURATION,
  },
}

const NavList: React.FunctionComponent = memo(() => {
  const navRef = React.useRef() as MutableRefObject<HTMLDivElement>

  return (
    <S.Container ref={navRef}>
      <S.List>
        <S.ListItem>
          <S.ListItemLink to="/" {...linkProps}>
            Overview
          </S.ListItemLink>
        </S.ListItem>
        <S.ListItem>
          <S.ListItemLink to="/projects/" partiallyActive={true} {...linkProps}>
            Projects
          </S.ListItemLink>
        </S.ListItem>
        <S.ListItem>
          <S.ListItemLink to="/about/" {...linkProps}>
            About
          </S.ListItemLink>
        </S.ListItem>
      </S.List>
    </S.Container>
  )
})

export default NavList
