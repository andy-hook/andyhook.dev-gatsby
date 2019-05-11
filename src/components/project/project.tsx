import React, { ReactNode } from "react"
import Link from "gatsby-plugin-transition-link"
import styled from "styled-components"

interface Props {
  children: ReactNode
}

const Project: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <ProjectContainer>
      <Link
        to="/"
        entry={{
          delay: 0,
          length: 0,
          state: {
            animType: "enter-from-project",
          },
        }}
        exit={{
          delay: 0,
          length: 0,
          state: {
            animType: "exit animation",
          },
        }}
      >
        GO HOME
      </Link>
      {children}
    </ProjectContainer>
  )
}

const ProjectContainer = styled.article`
  height: 3000px;
`

export default Project
