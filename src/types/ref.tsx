import React from "react"

export type Ref = React.MutableRefObject<HTMLImageElement> &
  React.MutableRefObject<HTMLAnchorElement> &
  React.MutableRefObject<HTMLSpanElement> &
  React.MutableRefObject<HTMLDivElement>
