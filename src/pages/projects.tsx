import React from "react"

import SEO from "@components/seo"
import styled from "styled-components"

const ProjectsPage: React.FunctionComponent = () => {
  return (
    <>
      <SEO />
      <ProjectsWrapper>This is the root project page</ProjectsWrapper>
    </>
  )
}

const ProjectsWrapper = styled.div`
  background-color: blue;

  height: 2000px;
`

export default ProjectsPage
