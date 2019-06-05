import React from "react"

import SEO from "@components/seo"
import HeroContainer from "@components/home/hero/hero.container"
import WorkContainer from "@components/home/work/work.container"
import HomeContainer from "@components/home/home.container"

const IndexPage: React.FunctionComponent = () => {
  return (
    <>
      <SEO bodyClasses="page-background-dark" />

      <HomeContainer>
        <HeroContainer />
        <WorkContainer />
      </HomeContainer>
    </>
  )
}

export default IndexPage
