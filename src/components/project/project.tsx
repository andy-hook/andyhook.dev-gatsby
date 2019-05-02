import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const Project: React.FunctionComponent<Props> = ({ children }) => {
  return <article>{children}</article>
}

export default Project
