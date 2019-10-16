import React, { memo } from "react"
import Link from "gatsby-plugin-transition-link"
import styled from "styled-components"
import { typeBaseSemibold, typeSizeBaseXs } from "@style/typography"
import { themeText } from "@style/theme"
import { lineHeight } from "@style/variables"
import { Ref } from "@custom-types/ref"
import { TweenMax, Expo } from "gsap"
import useDeferredRunEffect from "@hooks/deferred-run"

interface Props {
  hidden?: boolean
}

const NavList: React.FunctionComponent<Props> = memo(({ hidden }) => {
  const navRef = React.useRef() as Ref

  const animateHide = () => {
    TweenMax.to(navRef.current, 0.5, {
      ease: Expo.easeOut,
      y: "25%",
      opacity: 0,
    })
  }

  const animateShow = () => {
    TweenMax.to(navRef.current, 0.5, {
      ease: Expo.easeOut,
      y: "0%",
      opacity: 1,
    })
  }

  useDeferredRunEffect(() => {
    if (hidden) {
      animateHide()
    } else {
      animateShow()
    }
  }, [hidden])

  return (
    <ListNav ref={navRef}>
      <List>
        <ListItem>
          <ListItemLink to="/" activeClassName="active">
            Overview
          </ListItemLink>
        </ListItem>
        <ListItem>
          <ListItemLink
            to="/projects/"
            activeClassName="active"
            partiallyActive={true}
          >
            Projects
          </ListItemLink>
        </ListItem>
        <ListItem>
          <ListItemLink to="/about/" activeClassName="active">
            About
          </ListItemLink>
        </ListItem>
      </List>
    </ListNav>
  )
})

const ListNav = styled.nav`
  margin-right: 2.5em;
`

const List = styled.ul`
  ${typeBaseSemibold}
  ${typeSizeBaseXs}

  display: flex;
`

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 1.1em;
  }
`

const ListItemLink = styled(Link)`
  display: block;
  color: ${themeText(1000)};

  padding: 1em;

  line-height: ${lineHeight.flat};

  &.active {
    color: ${themeText(400)};
  }
`

export default NavList
