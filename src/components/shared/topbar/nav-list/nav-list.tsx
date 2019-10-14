import React, { memo } from "react"
import Link from "gatsby-plugin-transition-link"
import styled from "styled-components"
import { typeBaseSemibold, typeSizeBaseXs } from "@style/typography"
import { themeText } from "@style/theme"

const NavList: React.FunctionComponent = memo(() => {
  return (
    <nav>
      <List>
        <ListItem>
          <ListItemLink to="/" activeClassName="active">
            Overview
          </ListItemLink>
        </ListItem>
        <ListItem>
          <ListItemLink
            to="/projects"
            activeClassName="active"
            partiallyActive={true}
          >
            Projects
          </ListItemLink>
        </ListItem>
        <ListItem>
          <ListItemLink to="/about" activeClassName="active">
            About
          </ListItemLink>
        </ListItem>
      </List>
    </nav>
  )
})

const List = styled.ul`
  ${typeBaseSemibold}
  ${typeSizeBaseXs}

  display: flex;

  margin-right: 4em;
`

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 3em;
  }
`

const ListItemLink = styled(Link)`
  color: ${themeText(1000)};

  &.active {
    color: ${themeText(400)};
  }
`

export default NavList
