import React from "react"
import ProjectContainer from "@components/project/project.container"

import SEO from "@components/seo"

const BrandwatchProject: React.FunctionComponent = () => {
  return (
    <>
      <SEO bodyClasses="page-background-light" />
      <ProjectContainer projectName="monster">hello</ProjectContainer>
    </>
  )
}

export default BrandwatchProject
