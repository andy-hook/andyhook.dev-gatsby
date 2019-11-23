import React, { memo } from "react"
import { keys } from "@custom-types/utils"
import { Projects } from "model"
import * as S from "./images-overlay.style"
import CoverImageContainer from "@components/shared/cover-image/cover-image.container"

interface Props {
  projectDataList: Projects
  activeIndex?: number
}

const ImagesOverlay: React.FunctionComponent<Props> = memo(
  ({ projectDataList, activeIndex }) => {
    const projectItems = keys(projectDataList).map((key, index) => (
      <S.OverlayListItem
        key={index}
        className={activeIndex === index ? "active" : ""}
      >
        <CoverImageContainer imagePath={projectDataList[key].images} />
      </S.OverlayListItem>
    ))

    return <S.OverlayList>{projectItems}</S.OverlayList>
  }
)

export default ImagesOverlay
