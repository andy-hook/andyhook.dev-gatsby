import React, { memo } from "react"
import { Store } from "@custom-types/store"
import { connect } from "react-redux"
import SidebarSlide from "./sidebar-slide"

interface StoreProps {
  menuOpen: Store["menuOpen"]
}

const mapStateToProps = ({ menuOpen }: Store) => {
  return { menuOpen }
}

const SidebarSlideContainer: React.FunctionComponent<StoreProps> = memo(
  ({ menuOpen, children }) => {
    return <SidebarSlide open={menuOpen}>{children}</SidebarSlide>
  }
)

const ConnectedSidebarSlide = connect(mapStateToProps)(SidebarSlideContainer)

export default ConnectedSidebarSlide
