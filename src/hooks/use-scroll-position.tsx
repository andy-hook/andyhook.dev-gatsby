import { useLayoutEffect, useRef, DependencyList } from "react"
import { throttle } from "lodash"

interface ScrollProps {
  prevPos: {
    x: number
    y: number
  }
  currPos: {
    x: number
    y: number
  }
}

function getScrollPosition() {
  return { x: window.scrollX, y: window.scrollY }
}

export function useScrollPosition(
  effect: (props: ScrollProps) => void,
  deps?: DependencyList,
  wait: number = 300
) {
  const position = useRef(getScrollPosition())

  const callBack = () => {
    const currPos = getScrollPosition()
    effect({ prevPos: position.current, currPos })
    position.current = currPos
  }

  useLayoutEffect(() => {
    const throttleScroll = throttle(callBack, wait)

    window.addEventListener("scroll", throttleScroll)

    return () => window.removeEventListener("scroll", throttleScroll)
  }, deps)
}
