import { TweenMax, Expo } from "gsap"
import { Ref } from "@custom-types/ref"
import { keys } from "@custom-types/utils"

export type TAnimationStateNames = "open" | "close"

type TAnimationStates = { [key in TAnimationStateNames]: (ref: Ref) => void }

interface TAnimation {
  [key: string]: TAnimationStates
}

export let menuIsAnimating = false

export const animation: TAnimation = {
  backboard: {
    open: ref => {
      menuIsAnimating = true

      TweenMax.fromTo(
        ref.current,
        0.75,
        {
          opacity: 1,
          y: "-100%",
        },
        {
          ease: Expo.easeOut,
          y: "0%",
          onComplete: () => {
            menuIsAnimating = false
          },
        }
      )
    },

    close: ref => {
      menuIsAnimating = true

      TweenMax.fromTo(
        ref.current,
        0.75,
        {
          y: "0%",
        },
        {
          ease: Expo.easeOut,
          y: "100%",
          clearProps: "transform, opacity",
          onComplete: () => {
            menuIsAnimating = false
          },
        }
      )
    },
  },
}

export const runAnimation = (
  refs: { [key: string]: Ref },
  type: TAnimationStateNames
) => {
  keys(refs).map(item => {
    const animationToRun = animation[item][type]
    if (animationToRun) {
      animationToRun(refs[item])
    }
  })
}
