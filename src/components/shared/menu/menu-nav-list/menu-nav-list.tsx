import React, { memo } from "react"
import * as S from "./menu-nav-list.style"

const MenuNavList: React.FunctionComponent = memo(() => {
  return (
    <S.List>
      <S.ListItem>
        <S.ListItemLink>Overview</S.ListItemLink>
      </S.ListItem>
      <S.ListItem>
        <S.ListItemLink>Projects</S.ListItemLink>
      </S.ListItem>
      <S.ListItem>
        <S.ListItemLink>About</S.ListItemLink>
      </S.ListItem>
    </S.List>
  )
})

export default MenuNavList
