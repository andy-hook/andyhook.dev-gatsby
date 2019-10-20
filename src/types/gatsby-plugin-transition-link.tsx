import { Ref } from "@custom-types/ref"

export type TpageAnimationType =
  | "enter"
  | "exit"
  | "firstEnter"
  | "openMenu"
  | "closeMenu"
  | "menuEnter"
  | "pop"
  | "nextProjectExit"
  | "nextProjectEnter"

export type TpageAnimationStates = {
  [key in TpageAnimationType]?: (ref: Ref) => void
}

export interface IpageAnimation {
  [key: string]: TpageAnimationStates
}

// Quick, dirty and potted types for gatsby-plugin-transition-link
interface ItransitionProps {
  delay: number
  length: number
  state: {
    animType?: TpageAnimationType
  }
}

export interface ItransitionState {
  transitionStatus: "entering" | "entered" | "exiting" | "exited" | "POP"
  current: ItransitionProps
  entry: ItransitionProps
  exit: ItransitionProps
  mount: boolean
}
