import { TweenMax, Expo } from "gsap"
import { Ref } from "@custom-types/ref"

interface Animation {
  [key: string]: {
    [key: string]: (ref: Ref) => void
    open: (ref: Ref) => void
    close: (ref: Ref) => void
  }
}

export let menuIsAnimating = false

export const animation: Animation = {
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
