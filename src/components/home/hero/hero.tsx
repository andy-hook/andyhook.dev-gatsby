import React, { useEffect, memo, MutableRefObject } from "react"
import Details from "./details/details"
import Gutter from "@components/shared/gutter/gutter"
import { TweenMax, Elastic } from "gsap"
import SidebarSlide from "@components/shared/sidebar-slide/sidebar-slide.container"
import * as S from "./hero.style"
import { PAGE_TRANSITION_DURATION } from "@constants"
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
      TweenMax.fromTo(
        detailsRef.current,
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

      TweenMax.to(backgroundRef.current, 0.9, {
        opacity: 1,
      })
    }

    const animateEnter = () => {
      TweenMax.fromTo(
        detailsRef.current,
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

      TweenMax.to(backgroundRef.current, 0.25, {
        opacity: 1,
      })
    }

    const animateExit = () => {
      TweenMax.fromTo(
        detailsRef.current,
        PAGE_TRANSITION_DURATION,
        {
          y: "0%",
        },
        {
          y: "-10%",
          opacity: 0,
          onComplete: () => {
            window.scrollTo(0, 0)
          },
        }
      )

      TweenMax.to(backgroundRef.current, PAGE_TRANSITION_DURATION, {
        opacity: 0,
      })
    }

    const animateFirstEnter = () => {
      TweenMax.fromTo(
        detailsRef.current,
        0.75,
        {
          scale: 1.5,
        },
        {
          ease: Elastic.easeOut.config(0.8, 1),
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
        TweenMax.to(backgroundRef.current, 0.9, {
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
      <SidebarSlide>
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
      </SidebarSlide>
    )
  }
)

export default Hero
