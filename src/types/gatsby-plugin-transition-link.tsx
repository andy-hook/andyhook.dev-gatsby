import { GatsbyLinkProps } from "gatsby-link"

export type TtransitionType =
  | "enter"
  | "exit"
  | "firstEnter"
  | "menuEnter"
  | "pop"
  | "nextProjectExit"
  | "nextProjectEnter"

export type TtransitionStatus =
  | "entering"
  | "entered"
  | "exiting"
  | "exited"
  | "POP"

interface ItransitionLinkProps {
  delay?: number
  length?: number
  state?: {
    animType: TtransitionType
  }
}

interface ItransitionStateProps {
  delay: number
  length: number
  state: {
    animType?: TtransitionType
  }
}

export interface ItransitionState {
  transitionStatus: TtransitionStatus
  current: ItransitionStateProps
  entry: ItransitionStateProps
  exit: ItransitionStateProps
  mount: boolean
}

export interface ItransitionLink<TState> extends GatsbyLinkProps<TState> {
  entry?: ItransitionLinkProps
  exit?: ItransitionLinkProps
}
