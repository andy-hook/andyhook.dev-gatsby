import React, { memo } from "react"
import Topbar from "./topbar"
import { connect } from "react-redux"
import { IStore } from "@custom-types/store"

type ContainerProps = Partial<IStore>

const mapStateToProps = ({ menuOpen }: IStore) => {
  return { menuOpen }
}

const TopbarContainer: React.FunctionComponent<ContainerProps> = memo(
  ({ menuOpen }) => {
    return <Topbar open={menuOpen} />
  }
)

const ConnectedTopbar = connect(mapStateToProps)(TopbarContainer)

export default ConnectedTopbar
