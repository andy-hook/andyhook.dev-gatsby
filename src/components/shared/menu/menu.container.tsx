import React, { memo } from "react"
import Menu from "./menu"
import { connect } from "react-redux"
import { IStore } from "@custom-types/store"
import { ThemeProvider } from "styled-components"
import { themes } from "@style/theme"

type ContainerProps = Partial<IStore>

const mapStateToProps = ({ menuOpen, secondaryTheme }: IStore) => {
  return { menuOpen, secondaryTheme }
}

const MenuContainer: React.FunctionComponent<ContainerProps> = memo(
  ({ menuOpen, secondaryTheme = "light" }) => {
    return (
      <ThemeProvider theme={themes[secondaryTheme]}>
        <Menu open={menuOpen} />
      </ThemeProvider>
    )
  }
)

const ConnectedMenu = connect(mapStateToProps)(MenuContainer)

export default ConnectedMenu
