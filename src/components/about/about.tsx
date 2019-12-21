import React, { memo } from "react"
import CommonPage from "@components/shared/common-page/common-page"
import OverlineTitle from "@components/shared/overline-title/overline-title"
import * as S from "./about.style"
import Gutter from "@components/shared/gutter/gutter"
import Limiter from "@components/shared/limiter/limiter"
import usePageTransition from "@hooks/page-transition"
import AboutHeroContainer from "@components/about/about-hero/about-hero.container"
import TitleCopyAside from "@components/shared/title-copy-aside/title-copy-aside"

const About: React.FunctionComponent = memo(() => {
  const animatePop = () => {
    // gsap.fromTo(
    //   testDiv.current,
    //   {
    //     scale: 1.5,
    //   },
    //   {
    //     duration: 0.75,
    //     ease: "elastic.out(0.8, 1)",
    //     scale: 1,
    //     opacity: 1,
    //   }
    // )
  }

  const animateEnter = () => {
    // gsap.fromTo(
    //   testDiv.current,
    //   {
    //     y: "50%",
    //     opacity: 0,
    //   },
    //   {
    //     duration: 0.25,
    //     y: "0%",
    //     opacity: 1,
    //   }
    // )
  }

  const animateExit = () => {
    // gsap.fromTo(
    //   testDiv.current,
    //   {
    //     y: "0%",
    //   },
    //   {
    //     duration: PAGE_LEAVE_DURATION,
    //     y: "-10%",
    //     opacity: 0,
    //     onComplete: () => {
    //       window.scrollTo(0, 0)
    //     },
    //   }
    // )
  }

  const { inviewRef } = usePageTransition({
    runInview: {
      onEnter: animateEnter,
      onExit: animateExit,
      onPop: animatePop,
      onEnterFromMenu: animateEnter,
    },
  })

  return (
    <CommonPage>
      <Gutter ref={inviewRef}>
        <Limiter>
          <S.TitleLimiter>
            <OverlineTitle overline="About">
              Just a UI developer living in Brighton
            </OverlineTitle>
          </S.TitleLimiter>
          <AboutHeroContainer />
          <TitleCopyAside title="This is a title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tincidunt hendrerit ex, at elementum augue malesuada eu.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nam congue maximus erat vel tincidunt.
            Aliquam eget hendrerit elit. Donec malesuada, augue quis blandit
            interdum, sapien tellus lacinia neque, ut varius diam nisl in erat.
            Fusce augue turpis, sollicitudin in elit ac, tristique varius ante.
            Nullam vel sapien id turpis iaculis fringilla eu a ipsum.
          </TitleCopyAside>
        </Limiter>
      </Gutter>
    </CommonPage>
  )
})

export default About
