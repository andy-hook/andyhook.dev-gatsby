import React, { memo } from "react"
import Menu from "./menu"
import { connect } from "react-redux"
import { IStore } from "@custom-types/store"

type ContainerProps = Partial<IStore>

const mapStateToProps = ({ menuOpen }: IStore) => {
  return { menuOpen }
}

const MenuContainer: React.FunctionComponent<ContainerProps> = memo(
  ({ menuOpen }) => {
    return <Menu open={menuOpen} />
  }
)

const ConnectedMenu = connect(mapStateToProps)(MenuContainer)

export default ConnectedMenu
