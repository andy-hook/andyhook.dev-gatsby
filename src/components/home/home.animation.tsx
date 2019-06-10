import { TweenMax } from "gsap"
import { Ref } from "@custom-types/ref"
import { keys } from "@custom-types/utils"

export type TAnimationStateNames =
  | "enterFromProject"
  | "exitToProject"
  | "openMenu"
  | "closeMenu"

type TAnimationStates = { [key in TAnimationStateNames]?: (ref: Ref) => void }

interface TAnimation {
  [key: string]: TAnimationStates
}

export const animation: TAnimation = {
  animationScrim: {
    enterFromProject: ref => {
      TweenMax.fromTo(
        ref.current,
        1.25,
        {
          opacity: 1,
        },
        {
          opacity: 0,
        }
      )
    },
    exitToProject: ref => {
      TweenMax.fromTo(
        ref.current,
        0.2,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
    },
    openMenu: ref => {
      TweenMax.to(ref.current, 0.25, {
        opacity: 1,
      })
    },
    closeMenu: ref => {
      TweenMax.to(ref.current, 1, {
        opacity: 0,
        clearProps: "opacity",
      })
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
