import { TweenMax, Elastic } from "gsap"
import { Ref } from "@custom-types/ref"

interface Animation {
  [key: string]: {
    [key: string]: (ref: Ref) => void
    siteEntrance: (ref: Ref) => void
    enterFromProject: (ref: Ref) => void
    exitToProject: (ref: Ref) => void
  }
}

const siteEntranceDelay = 0.65

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
          delay: siteEntranceDelay,
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
          delay: siteEntranceDelay,
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
    pop: ref => {
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
    pop: ref => {
      TweenMax.to(ref.current, 0.9, {
        opacity: 1,
      })
    },
  },
}
