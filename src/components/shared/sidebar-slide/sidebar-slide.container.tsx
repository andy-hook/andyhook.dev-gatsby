import React, { memo, ReactNode } from "react"
import { Store } from "@custom-types/store"
import { connect } from "react-redux"
import SidebarSlide from "./sidebar-slide"

interface StoreProps {
  menuOpen: Store["menuOpen"]
}

interface Props {
  children: ReactNode
}

type AllProps = StoreProps & Props

const mapStateToProps = ({ menuOpen }: Store) => {
  return { menuOpen }
}

const SidebarSlideContainer: React.FunctionComponent<AllProps> = memo(
  ({ menuOpen, children }) => {
    return <SidebarSlide open={menuOpen}>{children}</SidebarSlide>
  }
)

const ConnectedSidebarSlide = connect(mapStateToProps)(SidebarSlideContainer)

export default ConnectedSidebarSlide
