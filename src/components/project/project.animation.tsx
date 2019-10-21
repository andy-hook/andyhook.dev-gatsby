import { TweenMax } from "gsap"
import { Ref } from "@custom-types/ref"
import { keys } from "@custom-types/utils"

import {
  IpageAnimation,
  TpageAnimationType,
} from "@custom-types/gatsby-plugin-transition-link"

const siteEntranceDelay = 0.65

export const animation: IpageAnimation = {
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
          opacity: 1,
        },
        {
          opacity: 1,
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
