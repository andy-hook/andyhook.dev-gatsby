import React, { memo } from "react"
import OverlineTitle from "@components/shared/overline-title/overline-title"
import CommonPage from "@components/shared/common-page/common-page"
import Gutter from "@components/shared/gutter/gutter"
import Limiter from "@components/shared/limiter/limiter"
import usePageTransition from "@hooks/page-transition"
import ProjectsGridContainer from "./projects-grid/projects-grid.container"

const Projects: React.FunctionComponent = memo(() => {
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
          <OverlineTitle overline="Projects">
            A selection of my favourite work
          </OverlineTitle>
          <ProjectsGridContainer />
        </Limiter>
      </Gutter>
    </CommonPage>
  )
})

export default Projects
