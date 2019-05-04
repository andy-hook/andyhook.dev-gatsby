// Ignore SVG imports as they are not valid to TS but supported by gatsby-plugin-react-svg
declare module "*.svg" {
  const content: any
  export default content
}

// gatsby-plugin-transition-link doesn't currently have type declarations
// https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues/14
declare module "gatsby-plugin-transition-link" {
  export const TransitionState: any
  export const TransitionPortal: any
  export const Link: any

  export default Link
}

declare module "gatsby-plugin-transition-link/hooks" {
  export const useTransitionState: any
}
