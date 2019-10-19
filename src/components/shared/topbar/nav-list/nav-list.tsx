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

export const linkProps = {
  activeClassName: "active",

  exit: {
    state: {
      animType: "exit",
    },
    length: 0.25, // Should match entry delay
  },
  entry: {
    state: {
      animType: "enter",
    },
    delay: 0.25, // How long the current page should show for before changing scroll position
    length: 0.25,
  },
}

const NavList: React.FunctionComponent<Props> = memo(({ hidden }) => {
  const navRef = React.useRef() as Ref

  const animateHide = () => {
    TweenMax.to(navRef.current, 0.2, {
      ease: Expo.easeOut,
      y: "50%",
      opacity: 0,
    })
  }

  const animateShow = () => {
    TweenMax.fromTo(
      navRef.current,
      0.5,
      {
        y: "-50%",
      },
      {
        ease: Expo.easeOut,
        y: "0%",
        opacity: 1,
      }
    )
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
          <ListItemLink to="/" activeClassName="active" {...linkProps}>
            Overview
          </ListItemLink>
        </ListItem>
        <ListItem>
          <ListItemLink to="/projects/" partiallyActive={true} {...linkProps}>
            Projects
          </ListItemLink>
        </ListItem>
        <ListItem>
          <ListItemLink to="/about/" {...linkProps}>
            About
          </ListItemLink>
        </ListItem>
      </List>
    </ListNav>
  )
})

const ListNav = styled.nav`
  margin-right: 2.25em;
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
