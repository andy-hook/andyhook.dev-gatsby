import React from "react"
import { IProjectItem } from "@custom-types/model"
import styled from "styled-components"
import CoverImageContainer from "@components/shared/cover-image/cover-image.container"

// Note – No background colour should be set in here otherwise there is flicker when
// mounting after clicking the "Next project" component

interface Props {
  project: IProjectItem
}

const Header: React.FunctionComponent<Props> = ({ project }) => {
  return (
    <Container>
      <BackgroundImage>
        <CoverImageContainer imagePath={project.images} />
      </BackgroundImage>
    </Container>
  )
}

const Container = styled.header`
  position: relative;
  height: 100vh;
  overflow: hidden;
`

const BackgroundImage = styled.header`
  height: 100%;
  opacity: 1;

  transform: scale(1.1);
`

export default Header
