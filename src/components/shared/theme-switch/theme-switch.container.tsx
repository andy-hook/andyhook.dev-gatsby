import React, { memo } from "react"
import ThemeSwitch from "./theme-switch"
import { IStore } from "@custom-types/store"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { setPrimaryThemeAction, setSecondaryThemeAction } from "@store/actions"
import { TThemeName } from "@custom-types/theme"

interface DispatchProps {
  setPrimary: (themeName: TThemeName) => void
  setSecondary: (themeName: TThemeName) => void
}

const mapStateToProps = ({ primaryTheme }: IStore) => {
  return { primaryTheme }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setPrimary: (themeName: TThemeName) => {
      dispatch(setPrimaryThemeAction(themeName))
    },
    setSecondary: (themeName: TThemeName) => {
      dispatch(setSecondaryThemeAction(themeName))
    },
  }
}

type AllProps = Partial<IStore> & DispatchProps

const ThemeSwitchContainer: React.FunctionComponent<AllProps> = memo(
  ({ primaryTheme, setPrimary, setSecondary }) => {
    const toggleThemes = () => {
      switch (primaryTheme) {
        case "dark":
          setPrimary("light")
          setSecondary("dark")

          break
        case "light":
          setPrimary("dark")
          setSecondary("light")

          break
      }
    }
    return <ThemeSwitch onClick={toggleThemes} />
  }
)

const ConnectedThemeSwitchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeSwitchContainer)

export default ConnectedThemeSwitchContainer
