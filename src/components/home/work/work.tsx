import React, { memo } from "react"
import { Projects } from "@custom-types/model"
import Gutter from "@components/shared/gutter/gutter"
import Limiter from "@components/shared/limiter/limiter"
import * as S from "./work.style"
import OverlineTitle from "@components/shared/overline-title/overline-title"
import ProjectsGridContainer from "@components/shared/projects-grid/projects-grid.container"

interface Props {
  projects: Projects
}

const Work: React.FunctionComponent<Props> = memo(() => {
  return (
    <S.Container>
      <Gutter>
        <Limiter size="medium">
          <S.TitleLimiter>
            <OverlineTitle overline="Projects">
              A selection of my favourite work
            </OverlineTitle>
          </S.TitleLimiter>
          <ProjectsGridContainer />
        </Limiter>
      </Gutter>
    </S.Container>
  )
})

export default Work
