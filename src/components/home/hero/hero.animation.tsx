import { TweenMax, Elastic } from "gsap"
import { Ref } from "@custom-types/ref"

interface Animation {
  [key: string]: {
    [key: string]: (ref: Ref) => void
  }
}

export const animation: Animation = {
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
        }
      )
    },
    enterFromProject: ref => {
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
    exitToProject: ref => {
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
        }
      )
    },
    enterFromProject: ref => {
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
    exitToProject: ref => {
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
        }
      )
    },
    enterFromProject: ref => {
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
    exitToProject: ref => {
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
    siteEntrance: ref => {
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
    enterFromProject: ref => {
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
    exitToProject: ref => {
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
    siteEntrance: ref => {
      TweenMax.to(ref.current, 0.9, {
        opacity: 1,
      })
    },
    enterFromProject: ref => {
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
    exitToProject: ref => {
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
