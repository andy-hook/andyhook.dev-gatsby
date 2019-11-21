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
        state: {
          animType: TRANSITION_TYPE_ENTER,
        },
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

const TestComponent: React.FunctionComponent = () => {
  const [shouldRender, setRender] = useState<boolean>(false)

  const test = () => {
    setRender(true)
  }

  const { inviewRef } = usePageTransition({
    runInview: {
      onEnter: test,
    },
  })

  const renderTestText = () => {
    if (shouldRender) {
      return "Hello world"
    }
  }

  return <div ref={inviewRef}>{renderTestText()}</div>
}

test("should only execute callback after first render", () => {
  const testMessage = "Hello world"
  const { queryByText } = render(<TestComponent />)

  mockAllIsIntersecting(true)

  expect(queryByText(testMessage)).toBeTruthy()
})
