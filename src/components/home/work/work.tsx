import React, { memo } from "react"
import { ContainerProps } from "./work.container"

type AllProps = ContainerProps

const Hero: React.FunctionComponent<AllProps> = memo(({ projectsData }) => {
  return <>{projectsData.brandwatch.desc}</>
})

export default Hero
