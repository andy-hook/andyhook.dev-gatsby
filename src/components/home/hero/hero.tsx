import React, {
  useEffect,
  memo,
  MutableRefObject,
  useState,
  useCallback,
} from "react"
import Details from "./details/details"
import Gutter from "@components/shared/gutter/gutter"
import gsap from "gsap"
import * as S from "./hero.style"
import { PAGE_LEAVE_DURATION } from "@constants"
import usePageTransition from "@hooks/page-transition"

interface Props {
  loaderVisible: boolean
  firstEntrance: boolean
  buttonHref: string
}

const Hero: React.FunctionComponent<Props> = memo(
  ({ buttonHref, loaderVisible, firstEntrance }) => {
    const detailsRef = React.useRef() as MutableRefObject<HTMLDivElement>
    const backgroundRef = React.useRef() as MutableRefObject<HTMLDivElement>
    const [detailsVisible, setDetailsVisible] = useState(false)
    const [detailsAnimate, setDetailsAnimate] = useState(false)

    const animatePop = useCallback(() => {
      setDetailsAnimate(true)
      setDetailsVisible(true)

      gsap.fromTo(
        detailsRef.current,
        {
          scale: 1.5,
        },
        {
          duration: 0.75,
          ease: "elastic.out(0.8, 1)",
          scale: 1,
          opacity: 1,
          clearProps: "transform",
        }
      )

      gsap.to(backgroundRef.current, {
        duration: 0.9,
        opacity: 1,
      })
    }, [])

    const animateEnter = useCallback(() => {
      setDetailsAnimate(true)
      setDetailsVisible(true)

      gsap.fromTo(
        detailsRef.current,
        {
          y: "10%",
        },
        {
          duration: 0.25,
          y: "0%",
          opacity: 1,
          clearProps: "transform",
        }
      )

      gsap.to(backgroundRef.current, {
        duration: 0.25,
        opacity: 1,
      })
    }, [])

    const staticEnter = useCallback(() => {
      setDetailsAnimate(false)
      setDetailsVisible(true)
      gsap.set(detailsRef.current, {
        opacity: 1,
      })
    }, [])

    const animateExit = useCallback(() => {
      gsap.fromTo(
        detailsRef.current,
        {
          y: "0%",
        },
        {
          duration: PAGE_LEAVE_DURATION,
          y: "-10%",
          opacity: 0,
          onComplete: () => {
            window.scrollTo(0, 0)
          },
        }
      )

      gsap.to(backgroundRef.current, {
        duration: PAGE_LEAVE_DURATION,
        opacity: 0,
      })
    }, [])

    const animateFirstEnter = useCallback(() => {
      animatePop()
    }, [])

    const { inviewRef } = usePageTransition({
      runInview: {
        onEnter: animateEnter,
        onExit: animateExit,
        onPop: animatePop,
        onEnterFromMenu: animateEnter,
      },
      runOutOfView: {
        onEnter: staticEnter,
        onPop: staticEnter,
      },
    })

    useEffect(() => {
      if (firstEntrance) {
        gsap.to(backgroundRef.current, {
          duration: 0.9,
          opacity: 1,
        })
      }
    }, [firstEntrance])

    // Only trigger site entrance animation when requested by loader
    useEffect(() => {
      if (!loaderVisible && firstEntrance) {
        animateFirstEnter()
      }
    }, [loaderVisible])

    return (
      <S.Container ref={inviewRef}>
        <S.DetailsPos ref={detailsRef}>
          <Gutter>
            <Details
              visible={detailsVisible}
              buttonHref={buttonHref}
              animate={detailsAnimate}
            />
          </Gutter>
        </S.DetailsPos>

        <S.BackgroundContainer ref={backgroundRef}>
          <S.BackgroundGradient />
        </S.BackgroundContainer>
      </S.Container>
    )
  }
)

export default Hero
