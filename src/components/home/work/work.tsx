import React, { memo } from "react"
import { IProjectItem, TProjects } from "@custom-types/model"
import { keys } from "@custom-types/utils"
import Card from "./card/card"
import Gutter from "@components/shared/gutter/gutter"
import Limiter from "@components/shared/limiter/limiter"
import SidebarSlide from "@components/shared/sidebar-slide/sidebar-slide.container"
import * as S from "./work.style"
import usePageTransition from "@hooks/page-transition"

interface Props {
  projectsData: TProjects
}

const Work: React.FunctionComponent<Props> = memo(({ projectsData }) => {
  const renderArray: IProjectItem[] = []

  keys(projectsData).map(item => {
    renderArray.push(projectsData[item])
  })

  const renderItems = renderArray.map((item, key) => (
    <Card label={item.label} desc={item.desc} path={item.path} key={key} />
  ))

  const testVisiblityMethod = () => {
    console.log("visible runs")
  }

  const testHiddenMethod = () => {
    console.log("hidden runs")
  }

  const { inviewRef } = usePageTransition({
    runInview: {
      onEnter: testVisiblityMethod,
    },
    runOutOfView: {
      onEnter: testHiddenMethod,
    },
  })

  return (
    <S.Container>
      <SidebarSlide>
        <Gutter>
          <Limiter size="large">{renderItems}</Limiter>
          <div ref={inviewRef}>
            <Card label="dfsdf" desc="dfsfd" path="/brandwatch" />
          </div>
        </Gutter>
      </SidebarSlide>
    </S.Container>
  )
})

export default Work
