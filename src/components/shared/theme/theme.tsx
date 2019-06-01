import React, { memo, ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import { IStore } from "store"
import { connect } from "react-redux"
import { themes } from "@style/theme"
import { TThemeType, ITheme } from "@custom-types/theme"

interface Props {
  children: ReactNode
  themeType: TThemeType
}

type AllProps = Props & Partial<IStore>

const mapStateToProps = ({ primaryTheme, secondaryTheme }: IStore) => {
  return { primaryTheme, secondaryTheme }
}

const Theme: React.FunctionComponent<AllProps> = memo(
  ({ children, themeType, primaryTheme = "dark", secondaryTheme = "dark" }) => {
    const getTheme = (type: string): ITheme => {
      if (type === "primary-theme") {
        return themes[primaryTheme]
      } else if (type === "secondary-theme") {
        return themes[secondaryTheme]
      } else {
        return themes[primaryTheme]
      }
    }

    return (
      <ThemeProvider theme={getTheme(themeType)}>
        <>{children}</>
      </ThemeProvider>
    )
  }
)

const ConnectedTheme = connect(mapStateToProps)(Theme)
export default ConnectedTheme
