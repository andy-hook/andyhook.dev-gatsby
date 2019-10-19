import { TweenMax, Elastic } from "gsap"
import { Ref } from "@custom-types/ref"
import { keys } from "@custom-types/utils"
import {
  IpageAnimation,
  TpageAnimationType,
} from "@custom-types/gatsby-plugin-transition-link"

export const animation: IpageAnimation = {
  test: {
    enter: ref => {
      TweenMax.fromTo(
        ref.current,
        0.25,
        {
          y: "50%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
        }
      )
    },
    exit: ref => {
      TweenMax.fromTo(
        ref.current,
        0.25,
        {
          y: "0%",
        },
        {
          y: "-50%",
          opacity: 0,
        }
      )
    },
    pop: ref => {
      TweenMax.fromTo(
        ref.current,
        0.75,
        {
          scale: 1.5,
        },
        {
          ease: Elastic.easeOut.config(0.8, 1),
          scale: 1,
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
