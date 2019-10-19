import { TweenMax, Elastic } from "gsap"
import { Ref } from "@custom-types/ref"
import { keys } from "@custom-types/utils"
import {
  IpageAnimation,
  TpageAnimationType,
} from "@custom-types/gatsby-plugin-transition-link"

const siteEntranceDelay = 0.65

export const animation: IpageAnimation = {
  details: {
    firstEnter: ref => {
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
    enter: ref => {
      TweenMax.fromTo(
        ref.current,
        0.25,
        {
          y: "10%",
        },
        {
          y: "0%",
          opacity: 1,
          clearProps: "transform",
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
          y: "-10%",
          opacity: 0,
        }
      )
    },
    openMenu: ref => {
      TweenMax.fromTo(
        ref.current,
        0.25,
        {
          y: "0%",
        },
        {
          y: "10%",
          opacity: 0,
          clearProps: "transform",
        }
      )
    },
    closeMenu: ref => {
      TweenMax.fromTo(
        ref.current,
        0.25,
        {
          y: "-10%",
        },
        {
          y: "0%",
          opacity: 1,
          clearProps: "transform",
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
  background: {
    firstEnter: ref => {
      TweenMax.to(ref.current, 0.9, {
        opacity: 1,
      })
    },
    enter: ref => {
      TweenMax.to(ref.current, 0.25, {
        opacity: 1,
      })
    },
    exit: ref => {
      TweenMax.to(ref.current, 0.25, {
        opacity: 0,
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
  type: TpageAnimationType
) => {
  keys(refs).map(item => {
    const animationToRun = animation[item][type]
    if (animationToRun) {
      animationToRun(refs[item])
    }
  })
}
