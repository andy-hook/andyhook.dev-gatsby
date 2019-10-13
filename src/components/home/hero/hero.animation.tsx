import { TweenMax, Elastic } from "gsap"
import { Ref } from "@custom-types/ref"
import { keys } from "@custom-types/utils"

export type TAnimationStateNames =
  | "siteEntrance"
  | "enterFromProject"
  | "exitToProject"
  | "pop"

type TAnimationStates = { [key in TAnimationStateNames]?: (ref: Ref) => void }

interface TAnimation {
  [key: string]: TAnimationStates
}

const siteEntranceDelay = 0.65

export const animation: TAnimation = {
  details: {
    siteEntrance: ref => {
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
          delay: siteEntranceDelay,
        }
      )
    },
    enterFromProject: ref => {
      TweenMax.set(ref.current, {
        opacity: 1,
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
  logo: {
    siteEntrance: ref => {
      TweenMax.fromTo(
        ref.current,
        0.75,
        {
          y: "-100%",
        },
        {
          ease: Elastic.easeOut.config(0.8, 1),
          y: "0%",
          opacity: 1,
          clearProps: "transform",
          delay: siteEntranceDelay,
        }
      )
    },
    enterFromProject: ref => {
      TweenMax.set(ref.current, {
        opacity: 1,
      })
    },
    pop: ref => {
      TweenMax.fromTo(
        ref.current,
        0.75,
        {
          y: "-100%",
        },
        {
          ease: Elastic.easeOut.config(0.8, 1),
          y: "0%",
          opacity: 1,
          clearProps: "transform",
        }
      )
    },
  },
  social: {
    siteEntrance: ref => {
      TweenMax.fromTo(
        ref.current,
        0.6,
        {
          y: "100%",
        },
        {
          ease: Elastic.easeOut.config(0.8, 1),
          y: "0%",
          opacity: 1,
          clearProps: "transform",
          delay: siteEntranceDelay,
        }
      )
    },
    enterFromProject: ref => {
      TweenMax.set(ref.current, {
        opacity: 1,
      })
    },
    pop: ref => {
      TweenMax.fromTo(
        ref.current,
        0.6,
        {
          y: "100%",
        },
        {
          ease: Elastic.easeOut.config(0.8, 1),
          y: "0%",
          opacity: 1,
          clearProps: "transform",
        }
      )
    },
  },
  background: {
    siteEntrance: ref => {
      TweenMax.to(ref.current, 0.9, {
        opacity: 1,
      })
    },
    enterFromProject: ref => {
      TweenMax.set(ref.current, {
        opacity: 1,
      })
    },
    pop: ref => {
      TweenMax.to(ref.current, 0.9, {
        opacity: 1,
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
