// Quick, dirty and potted types for gatsby-plugin-transition-link
type TAnimType =
  | "enter-from-home"
  | "exit-to-home"
  | "enter-from-project"
  | "exit-to-project"

interface ItransitionProps {
  delay: number
  length: number
  state: {
    animType?: TAnimType
  }
}

export interface ItransitionState {
  transitionStatus: "entering" | "entered" | "exiting" | "exited" | "POP"
  current: ItransitionProps
  entry: ItransitionProps
  exit: ItransitionProps
  mount: boolean
}
