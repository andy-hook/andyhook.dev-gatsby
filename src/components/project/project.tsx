import React, { ReactNode } from "react"
import Link from "gatsby-plugin-transition-link"

interface Props {
  children: ReactNode
}

const Project: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <article>
      <Link
        to="/"
        entry={{
          delay: 0,
          length: 0,
          state: "enter-from-project",
        }}
        exit={{
          delay: 0,
          length: 0,
          state: "exit animation",
        }}
      >
        GO HOME
      </Link>
      {children}
    </article>
  )
}

export default Project
