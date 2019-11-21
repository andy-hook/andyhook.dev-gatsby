import React, { memo } from "react"
import * as S from "./menu-nav-list.style"
import {
  PAGE_TRANSITION_DURATION,
  TRANSITION_TYPE_EXIT,
  TRANSITION_TYPE_MENU_ENTER,
} from "@constants"

interface Props {
  onClick: () => void
}

export const linkProps = {
  exit: {
    state: {
      animType: TRANSITION_TYPE_EXIT,
    },
    length: PAGE_TRANSITION_DURATION, // Should match entry delay
  },
  entry: {
    state: {
      animType: TRANSITION_TYPE_MENU_ENTER,
    },
    delay: PAGE_TRANSITION_DURATION, // How long the current page should show for before changing scroll position
    length: PAGE_TRANSITION_DURATION,
  },
}

const MenuNavList: React.FunctionComponent<Props> = memo(({ onClick }) => {
  return (
    <S.List>
      <S.ListItem>
        <S.ListItemLink to="/" onClick={onClick} {...linkProps}>
          Overview
        </S.ListItemLink>
      </S.ListItem>
      <S.ListItem>
        <S.ListItemLink to="/projects/" onClick={onClick} {...linkProps}>
          Projects
        </S.ListItemLink>
      </S.ListItem>
      <S.ListItem>
        <S.ListItemLink to="/about/" onClick={onClick} {...linkProps}>
          About
        </S.ListItemLink>
      </S.ListItem>
    </S.List>
  )
})

export default MenuNavList
