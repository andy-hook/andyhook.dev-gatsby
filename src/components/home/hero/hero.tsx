import React, { useEffect, memo } from "react"
import Details from "./details/details"
import { Ref } from "@custom-types/ref"
import Gutter from "@components/shared/gutter/gutter"
import { ISocialMeta } from "model"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import { TweenMax, Elastic } from "gsap"
import SidebarSlide from "@components/shared/sidebar-slide/sidebar-slide.container"
import * as S from "./hero.style"

interface Props {
  loaderVisible: boolean
  firstEntrance: boolean
  socialIconData: ISocialMeta
}

const Hero: React.FunctionComponent<Props> = memo(
  ({ socialIconData, loaderVisible, firstEntrance }) => {
    const detailsRef = React.useRef() as Ref
    const backgroundRef = React.useRef() as Ref

    const transitionState = useTransitionState()

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
        0.25,
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

      TweenMax.to(backgroundRef.current, 0.25, {
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

    useEffect(() => {
      const { transitionStatus, exit, entry } = transitionState

      switch (transitionStatus) {
        case "POP":
          animatePop()
          break
        case "entering":
          switch (entry.state.animType) {
            case "enter":
              animateEnter()

              break
            // This clause works around bug with pushstate and history navigation
            // Hopefully this can be resolved and pop will run consistently
            // TODO – https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues/94
            default:
              animatePop()
          }
          break
        case "exiting":
          switch (exit.state.animType) {
            case "exit":
              animateExit()

              break
          }
          break
      }
    }, [transitionState.transitionStatus])

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
        <S.Container>
          <S.DetailsPos ref={detailsRef}>
            <Gutter>
              <Details buttonHref={socialIconData.dribbble.url} />
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
