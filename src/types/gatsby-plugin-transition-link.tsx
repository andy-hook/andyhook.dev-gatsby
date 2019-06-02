// Quick, dirty and potted types for gatsby-plugin-transition-link
type TAnimType =
  | "enter-from-home"
  | "leave-to-home"
  | "enter-from-project"
  | "leave-to-project"

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
