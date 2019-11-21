import React, { memo, useState } from "react"
import { Ref } from "@custom-types/ref"
import { TweenMax, Expo } from "gsap"
import useDeferredRunEffect from "@hooks/deferred-run"
import { useMediaQueryContext } from "@components/shared/media-query-provider/media-query-provider"
import * as S from "./nav-list.style"
import {
  PAGE_TRANSITION_DURATION,
  TRANSITION_TYPE_EXIT,
  TRANSITION_TYPE_ENTER,
} from "@constants"

interface Props {
  hidden?: boolean
}

export const linkProps = {
  activeClassName: "active",

  exit: {
    state: {
      animType: TRANSITION_TYPE_EXIT,
    },
    length: PAGE_TRANSITION_DURATION, // Should match entry delay
  },
  entry: {
    state: {
      animType: TRANSITION_TYPE_ENTER,
    },
    delay: PAGE_TRANSITION_DURATION, // How long the current page should show for before changing scroll position
    length: PAGE_TRANSITION_DURATION,
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
    <S.Container
      ref={navRef}
      className={hiddenApplied ? "is-hidden" : "is-visible"}
    >
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
