import React from "react"
import { mountWithTheme } from "@test-utils"
import {
  themeToneAlpha,
  themeTone,
  themeText,
  themeTextAlpha,
} from "@style/theme"
import styled from "styled-components"
import "jest-styled-components"

const ThemeToneComponent = styled.div`
  background-color: ${themeTone(100)};
`

const ThemeToneAlphaComponent = styled.div`
  background-color: ${themeToneAlpha(100, 0)};
`

const ThemeTextComponent = styled.div`
  color: ${themeText(100)};
`

const ThemeTextAlphaComponent = styled.div`
  color: ${themeTextAlpha(100, 0)};
`

describe("themeTone", () => {
  it("renders correct hsl from given tone value", () => {
    const tree = mountWithTheme("dark", <ThemeToneComponent />)
    expect(tree).toHaveStyleRule("background-color", "hsl(240,17%,2%)")
  })
})

describe("themeToneAlpha", () => {
  it("renders correct hsla from given tone value", () => {
    const tree = mountWithTheme("dark", <ThemeToneAlphaComponent />)
    expect(tree).toHaveStyleRule("background-color", "hsla(240,17%,2%,0)")
  })
})

describe("themeText", () => {
  it("renders correct hsl from given text value", () => {
    const tree = mountWithTheme("dark", <ThemeTextComponent />)
    expect(tree).toHaveStyleRule("color", "hsl(240,2%,100%)")
  })
})

describe("themeTextAlpha", () => {
  it("renders correct hsla from given text value", () => {
    const tree = mountWithTheme("dark", <ThemeTextAlphaComponent />)
    expect(tree).toHaveStyleRule("color", "hsla(240,2%,100%,0)")
  })
})
