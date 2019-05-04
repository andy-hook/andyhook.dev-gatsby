import { TweenMax, Elastic } from "gsap"
import { Ref } from "@custom-types/ref"

export default {
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
  },
}
