import React, { useEffect, memo, MutableRefObject } from "react"
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

    const animatePop = () => {
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
    }

    const animateEnter = () => {
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
    }

    const animateExit = () => {
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
    }

    const animateFirstEnter = () => {
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
          delay: 0.65,
        }
      )
    }

    const { inviewRef } = usePageTransition({
      runInview: {
        onEnter: animateEnter,
        onExit: animateExit,
        onPop: animatePop,
        onEnterFromMenu: animateEnter,
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
            <Details buttonHref={buttonHref} />
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
