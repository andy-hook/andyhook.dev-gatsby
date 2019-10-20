import React from "react"
import { IProjectItem } from "@custom-types/model"
import styled from "styled-components"
import CoverImageContainer from "@components/shared/cover-image/cover-image.container"

interface Props {
  project: IProjectItem
}

const NextProject: React.FunctionComponent<Props> = ({ project }) => {
  return (
    <Container>
      <CoverImageContainer imagePath={project.images} />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  background-color: blue;
`

export default NextProject
