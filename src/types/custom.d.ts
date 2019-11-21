// Ignore SVG imports as they are not valid to TS but supported by gatsby-plugin-react-svg
declare module "*.svg" {
  const content: any
  export default content
}

// gatsby-plugin-transition-link doesn't currently have type declarations
// https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues/14
declare module "gatsby-plugin-transition-link" {
  import React from "react"
  import {
    ItransitionLink,
    ItransitionState,
  } from "@custom-types/gatsby-plugin-transition-link"

  export const TransitionState: ItransitionState
  export const TransitionPortal: any

  export default class Link<TState> extends React.Component<
    ItransitionLink<TState>,
    any
  > {}
}

declare module "gatsby-plugin-transition-link/hooks" {
  import { ItransitionState } from "@custom-types/gatsby-plugin-transition-link"

  export const useTransitionState: () => ItransitionState
}
