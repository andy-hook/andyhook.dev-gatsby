// Quick, dirty and potted types for gatsby-plugin-transition-link
interface ItransitionState {
  delay: number
  length: number
  state: object
}

export interface ItransitionProps {
  transitionStatus: "entering" | "entered" | "exiting" | "exited"
  current: ItransitionState
  entry: ItransitionState
  exit: ItransitionState
  mount: boolean
}
