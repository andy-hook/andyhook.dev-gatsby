import React, { useState } from "react"
import usePageTransition from "@hooks/page-transition"
import { render } from "@testing-library/react"
import { ItransitionState } from "@custom-types/gatsby-plugin-transition-link"
import { TRANSITION_TYPE_ENTER, TRANSITION_STATUS_ENTERING } from "@constants"
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils"

jest.mock("gatsby-plugin-transition-link/hooks", () => ({
  useTransitionState: (): ItransitionState => {
    return {
      current: {
        delay: 0,
        length: 0,
        state: {},
      },
      entry: {
        delay: 0,
        length: 0,
        state: {
          animType: TRANSITION_TYPE_ENTER,
        },
      },
      exit: {
        delay: 0,
        length: 0,
        state: {},
      },
      transitionStatus: TRANSITION_STATUS_ENTERING,
      mount: false,
    }
  },
}))

const inviewMessage = "In view"
const outOfViewMessage = "Out of view"
const onPopCalledMessage = "On pop called"

const TestInViewComponent: React.FunctionComponent = () => {
  const [inview, setInviewState] = useState(false)
  const [outOfView, setOutOfViewState] = useState(false)

  const { inviewRef } = usePageTransition({
    runInview: {
      onEnter: () => {
        setInviewState(true)
      },
    },
    runOutOfView: {
      onEnter: () => {
        setOutOfViewState(true)
      },
    },
  })

  return (
    <div ref={inviewRef}>
      {inview && inviewMessage}
      {outOfView && outOfViewMessage}
    </div>
  )
}

const TestOnPopComponent: React.FunctionComponent = () => {
  const [onPopCalled, setOnPopCalled] = useState(false)

  const { inviewRef } = usePageTransition({
    runInview: {
      onPop: () => {
        setOnPopCalled(true)
      },
    },
  })

  return <div ref={inviewRef}>{onPopCalled && onPopCalledMessage}</div>
}

test("Should only run runInview callbacks when in view", () => {
  const { queryByText } = render(<TestInViewComponent />)

  mockAllIsIntersecting(true)

  expect(queryByText(inviewMessage)).toBeTruthy()
  expect(queryByText(outOfViewMessage)).toBeFalsy()
})

test("Should only run runOutOfView callbacks when not in view", () => {
  const { queryByText } = render(<TestInViewComponent />)

  mockAllIsIntersecting(false)

  expect(queryByText(outOfViewMessage)).toBeTruthy()
  expect(queryByText(inviewMessage)).toBeFalsy()
})

test("Should default to onPop in absence of any other entry type", () => {
  const { queryByText } = render(<TestOnPopComponent />)

  mockAllIsIntersecting(true)

  expect(queryByText(onPopCalledMessage)).toBeTruthy()
})

test.todo("Should only run supplied callbacks")
