import React, { memo, useState } from "react"
import Link from "gatsby-plugin-transition-link"
import styled, { css } from "styled-components"
import { typeBaseSemibold, typeSizeBaseXs } from "@style/typography"
import { themeText } from "@style/theme"
import { lineHeight } from "@style/variables"
import { Ref } from "@custom-types/ref"
import { TweenMax, Expo } from "gsap"
import useDeferredRunEffect from "@hooks/deferred-run"
import { useMediaQueryContext } from "@components/shared/media-query-provider/media-query-provider"
import { mq } from "@style/media-queries"

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
  const { topPalm } = useMediaQueryContext()
  const [hiddenApplied, setHiddenApplied] = useState(false)

  const animateHide = () => {
    TweenMax.fromTo(
      navRef.current,
      1,
      {
        opacity: 1,
      },
      {
        ease: Expo.easeOut,
        opacity: 0,
        clearProps: "all",
        onComplete: () => {
          setHiddenApplied(true)
        },
      }
    )
  }

  const animateShow = () => {
    TweenMax.fromTo(
      navRef.current,
      1,
      {
        x: "100%",
        opacity: 0,
      },
      {
        ease: Expo.easeOut,
        x: "0%",
        opacity: 1,
        clearProps: "all",
        onComplete: () => {
          setHiddenApplied(false)
        },
      }
    )
  }

  useDeferredRunEffect(() => {
    // Don't waste resources animating hidden elements on small screens
    if (topPalm) {
      if (hidden) {
        animateHide()
      } else {
        animateShow()
      }
    } else {
      hidden ? setHiddenApplied(true) : setHiddenApplied(false)
    }
  }, [hidden])

  return (
    <Container
      ref={navRef}
      className={hiddenApplied ? "is-hidden" : "is-visible"}
    >
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
    </Container>
  )
})

const Container = styled.nav`
  &.is-hidden {
    opacity: 0;
  }

  ${mq.lessThan("bottomPalm")`
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  `}
`

const List = styled.ul`
  ${typeBaseSemibold}
  ${typeSizeBaseXs}

  display: flex;
  margin-right: -1em;
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
