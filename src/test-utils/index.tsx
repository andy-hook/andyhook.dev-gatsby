import React, { ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import { shallow, mount, render } from "enzyme"
import { darkTheme } from "@style/theme"

export const mountWithTheme = (children: ReactNode) =>
  mount(
    <ThemeProvider theme={darkTheme}>
      <>{children}</>
    </ThemeProvider>
  )

export const renderWithTheme = (children: ReactNode) =>
  render(
    <ThemeProvider theme={darkTheme}>
      <>{children}</>
    </ThemeProvider>
  )

export const shallowWithTheme = (children: ReactNode) =>
  shallow(
    <ThemeProvider theme={darkTheme}>
      <>{children}</>
    </ThemeProvider>
  )
