import React, { memo, MutableRefObject } from "react"
import * as S from "./menu-nav-list.style"
import {
  PAGE_TRANSITION_DURATION,
  TRANSITION_TYPE_EXIT,
  TRANSITION_TYPE_MENU_ENTER,
} from "@constants"
import useDeferredRunEffect from "@hooks/deferred-run"
import { TweenMax, Expo } from "gsap"

interface Props {
  onClick: () => void
  open: boolean
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

type refArray<T> = Array<MutableRefObject<T>>

const MenuNavList: React.FunctionComponent<Props> = memo(
  ({ onClick, open }) => {
    const refs = [
      React.createRef(),
      React.createRef(),
      React.createRef(),
    ] as refArray<HTMLLIElement>
    const cachedRefs = React.useRef<refArray<HTMLLIElement>>(refs)

    const animateOpen = () => {
      cachedRefs.current.map((listItem, index) => {
        TweenMax.fromTo(
          listItem.current,
          1,
          {
            opacity: 0,
            y: `${100}%`,
          },
          {
            ease: Expo.easeOut,
            delay: 0.4 + index * 0.05,
            y: "0%",
            opacity: 1,
            clearProps: "opacity",
          }
        )
      })
    }
    const animateClose = () => {}

    useDeferredRunEffect(() => {
      open ? animateOpen() : animateClose()
    }, [open])

    return (
      <S.List>
        <S.ListItem ref={cachedRefs.current[0]}>
          <S.ListItemLink to="/" onClick={onClick} {...linkProps}>
            Overview
          </S.ListItemLink>
        </S.ListItem>
        <S.ListItem ref={cachedRefs.current[1]}>
          <S.ListItemLink to="/projects/" onClick={onClick} {...linkProps}>
            Projects
          </S.ListItemLink>
        </S.ListItem>
        <S.ListItem ref={cachedRefs.current[2]}>
          <S.ListItemLink to="/about/" onClick={onClick} {...linkProps}>
            About
          </S.ListItemLink>
        </S.ListItem>
      </S.List>
    )
  }
)

export default MenuNavList
