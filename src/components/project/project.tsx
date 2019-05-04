import React, { ReactNode } from "react"
import { TransitionState } from "gatsby-plugin-transition-link"
import { ItransitionProps } from "@custom-types/gatsby-plugin-transition-link"
import Link from "gatsby-plugin-transition-link"

interface Props {
  children: ReactNode
}

const Project: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <TransitionState>
      {(transitionProps: ItransitionProps) => {
        // console.log("project:", transitionProps)
        return (
          <article>
            <Link
              to="/"
              entry={{
                delay: 0,
                length: 0,
                state: "entry animation",
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
      }}
    </TransitionState>
  )
}

export default Project
