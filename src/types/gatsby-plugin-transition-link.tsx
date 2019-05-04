// Quick, dirty and potted types for gatsby-plugin-transition-link
interface ItransitionProps {
  delay: number
  length: number
  state: string
}

export interface ItransitionState {
  transitionStatus: "entering" | "entered" | "exiting" | "exited" | "POP"
  current: ItransitionProps
  entry: ItransitionProps
  exit: ItransitionProps
  mount: boolean
}
