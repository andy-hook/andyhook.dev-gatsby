import React, { useState } from "react"
import { render, fireEvent } from "@testing-library/react"
import useScrollPosition from "./use-scroll-position"

const TestComponent: React.FunctionComponent = () => {
  const [shouldRender, setRender] = useState<boolean>(false)

  useScrollPosition(() => {
    setRender(true)
  }, 500)

  const renderTestText = () => {
    if (shouldRender) {
      return "Hello world"
    }
  }

  return <>{renderTestText()}</>
}

test("should execute callback on scroll", () => {
  const testMessage = "Hello world"
  const { queryByText } = render(<TestComponent />)

  expect(queryByText(testMessage)).toBeFalsy()

  fireEvent.scroll(window)

  expect(queryByText(testMessage)).toBeTruthy()
})
