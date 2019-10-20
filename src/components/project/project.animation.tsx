import { TweenMax } from "gsap"
import { Ref } from "@custom-types/ref"
import { keys } from "@custom-types/utils"

import {
  IpageAnimation,
  TpageAnimationType,
} from "@custom-types/gatsby-plugin-transition-link"

const siteEntranceDelay = 0.65

export const animation: IpageAnimation = {
  backboard: {
    firstEnter: ref => {
      TweenMax.set(ref.current, {
        opacity: 1,
        x: "0%",
      })
    },
    menuEnter: ref => {
      TweenMax.set(ref.current, {
        opacity: 1,
        x: "0%",
      })
    },
    pop: ref => {
      TweenMax.set(ref.current, {
        opacity: 1,
        x: "0%",
      })
    },
  },
  content: {
    firstEnter: ref => {
      TweenMax.fromTo(
        ref.current,
        2,
        {
          opacity: 1,
        },
        {
          opacity: 1,
          delay: siteEntranceDelay,
        }
      )
    },
    menuEnter: ref => {
      TweenMax.fromTo(
        ref.current,
        0.75,
        {
          opacity: 0,
          y: "-2%",
        },
        {
          opacity: 1,
          y: "0%",
          clearProps: "transform",
        }
      )
    },
    pop: ref => {
      TweenMax.fromTo(
        ref.current,
        2,
        {
          opacity: 1,
        },
        {
          opacity: 1,
        }
      )
    },
  },
}

export const runAnimation = (
  refs: { [key: string]: Ref },
  type: TpageAnimationType
) => {
  keys(refs).map(item => {
    const animationToRun = animation[item][type]
    if (animationToRun) {
      animationToRun(refs[item])
    }
  })
}
