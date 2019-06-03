import { TweenMax, Elastic, Expo } from "gsap"
import { Ref } from "@custom-types/ref"

interface Animation {
  [key: string]: {
    [key: string]: (ref: Ref) => void
    siteEntrance: (ref: Ref) => void
    enterFromHome: (ref: Ref) => void
    exitToHome: (ref: Ref) => void
  }
}

const siteEntranceDelay = 0.65

export const animation: Animation = {
  backboard: {
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

    enterFromHome: ref => {
      TweenMax.set(ref.current, {
        opacity: 1,
      })
      TweenMax.to(ref.current, 0.5, {
        ease: Expo.easeOut,
        x: "0%",
      })
    },
    exitToHome: ref => {
      TweenMax.to(ref.current, 0.5, {
        ease: Expo.easeOut,
        x: "100%",
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
  content: {
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
