import React, { memo } from "react"
import * as S from "./menu-nav-list.style"

interface Props {
  onClick: () => void
}

const MenuNavList: React.FunctionComponent<Props> = memo(({ onClick }) => {
  return (
    <S.List>
      <S.ListItem>
        <S.ListItemLink to="/" onClick={onClick}>
          Overview
        </S.ListItemLink>
      </S.ListItem>
      <S.ListItem>
        <S.ListItemLink
          to="/projects/"
          exit={{
            length: 0,
          }}
          entry={{
            length: 0.75,
            state: {
              animType: "menuEnter",
            },
          }}
          onClick={onClick}
        >
          Projects
        </S.ListItemLink>
      </S.ListItem>
      <S.ListItem>
        <S.ListItemLink to="/about/" onClick={onClick}>
          About
        </S.ListItemLink>
      </S.ListItem>
    </S.List>
  )
})

export default MenuNavList
