import { useLayoutEffect, useEffect, useRef, DependencyList } from "react"
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

const isBrowser = typeof window !== `undefined`

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

const getScrollPosition = () => {
  if (!isBrowser) {
    return { x: 0, y: 0 }
  }
  return { x: window.scrollX, y: window.scrollY }
}

const useScrollPosition = (
  effect: (props: ScrollProps) => void,
  wait: number,
  deps?: DependencyList
) => {
  const position = useRef(getScrollPosition())

  const callBack = () => {
    const currPos = getScrollPosition()
    effect({ prevPos: position.current, currPos })
    position.current = currPos
  }

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return
    }

    const throttleScroll = throttle(callBack, wait, {
      leading: true,
      trailing: true,
    })

    window.addEventListener("scroll", throttleScroll)

    return () => window.removeEventListener("scroll", throttleScroll)
  }, deps)
}

export default useScrollPosition
