import { TweenMax, Elastic } from "gsap"
import { Ref } from "@custom-types/ref"

export const animation = {
  details: {
    siteEntrance: (ref: Ref) => {
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
    enterFromProject: (ref: Ref) => {
      TweenMax.fromTo(
        ref.current,
        0.75,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
    },
    exitToProject: (ref: Ref) => {
      TweenMax.fromTo(
        ref.current,
        0.75,
        {
          opacity: 1,
        },
        {
          opacity: 0,
        }
      )
    },
  },
  logo: {
    siteEntrance: (ref: Ref) => {
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
    enterFromProject: (ref: Ref) => {
      TweenMax.fromTo(
        ref.current,
        0.75,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
    },
    exitToProject: (ref: Ref) => {
      TweenMax.fromTo(
        ref.current,
        0.75,
        {
          opacity: 1,
        },
        {
          opacity: 0,
        }
      )
    },
  },
  social: {
    siteEntrance: (ref: Ref) => {
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
    enterFromProject: (ref: Ref) => {
      TweenMax.fromTo(
        ref.current,
        0.75,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
    },
    exitToProject: (ref: Ref) => {
      TweenMax.fromTo(
        ref.current,
        0.75,
        {
          opacity: 1,
        },
        {
          opacity: 0,
        }
      )
    },
  },
  date: {
    siteEntrance: (ref: Ref) => {
      TweenMax.fromTo(
        ref.current,
        0.8,
        {
          scale: 1.1,
        },
        {
          ease: Elastic.easeOut.config(0.8, 1),
          scale: 1,
          opacity: 1,
          clearProps: "transform",
        }
      )
    },
    enterFromProject: (ref: Ref) => {
      TweenMax.fromTo(
        ref.current,
        0.75,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
    },
    exitToProject: (ref: Ref) => {
      TweenMax.fromTo(
        ref.current,
        0.75,
        {
          opacity: 1,
        },
        {
          opacity: 0,
        }
      )
    },
  },
  background: {
    siteEntrance: (ref: Ref) => {
      TweenMax.to(ref.current, 0.9, {
        opacity: 1,
      })
    },
    enterFromProject: (ref: Ref) => {
      TweenMax.fromTo(
        ref.current,
        0.75,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
    },
    exitToProject: (ref: Ref) => {
      TweenMax.fromTo(
        ref.current,
        0.75,
        {
          opacity: 1,
        },
        {
          opacity: 0,
        }
      )
    },
  },
}
