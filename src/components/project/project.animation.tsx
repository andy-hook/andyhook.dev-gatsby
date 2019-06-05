import { TweenMax, Elastic, Expo } from "gsap"
import { Ref } from "@custom-types/ref"
import { keys } from "@custom-types/utils"

export type TAnimationStateNames =
  | "siteEntrance"
  | "enterFromHome"
  | "exitToHome"
  | "pop"

type TAnimationStates = { [key in TAnimationStateNames]?: (ref: Ref) => void }

interface TAnimation {
  [key: string]: TAnimationStates
}

const siteEntranceDelay = 0.65

export const animation: TAnimation = {
  backboard: {
    siteEntrance: ref => {
      TweenMax.set(ref.current, {
        opacity: 1,
        x: "0%",
      })
    },
    enterFromHome: ref => {
      TweenMax.fromTo(
        ref.current,
        0.5,
        {
          opacity: 1,
        },
        {
          ease: Expo.easeOut,
          x: "0%",
        }
      )
    },
    exitToHome: ref => {
      TweenMax.fromTo(
        ref.current,
        0.5,
        {
          opacity: 1,
          x: "0%",
        },
        {
          ease: Expo.easeOut,
          x: "100%",
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
          clearProps: "transform",
        }
      )
    },
  },
  content: {
    siteEntrance: ref => {
      TweenMax.fromTo(
        ref.current,
        2,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: siteEntranceDelay,
        }
      )
    },
    enterFromHome: ref => {
      TweenMax.to(ref.current, 0.75, {
        opacity: 1,
        delay: 0.5,
      })
    },
    exitToHome: ref => {
      TweenMax.set(ref.current, {
        opacity: 0,
      })
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
          clearProps: "transform",
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
