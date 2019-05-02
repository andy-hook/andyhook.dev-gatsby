import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const Hero: React.FunctionComponent<Props> = ({ children }) => {
  return <header>{children}</header>
}

export default Hero
