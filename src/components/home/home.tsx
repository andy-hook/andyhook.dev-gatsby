import React, { memo } from "react"
import HeroContainer from "@components/home/hero/hero.container"
import WorkContainer from "@components/home/work/work.container"

const Home: React.FunctionComponent = memo(() => {
  return (
    <>
      <HeroContainer />
      <WorkContainer />
    </>
  )
})

export default Home
