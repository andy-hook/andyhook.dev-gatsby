import React, { memo, ReactNode } from "react"
import { IStore } from "@custom-types/store"
import { connect } from "react-redux"
import SidebarSlide from "./sidebar-slide"

interface IStoreProps {
  menuOpen: IStore["menuOpen"]
}

interface Props {
  children: ReactNode
}

type AllProps = IStoreProps & Props

const mapStateToProps = ({ menuOpen }: IStore) => {
  return { menuOpen }
}

const SidebarSlideContainer: React.FunctionComponent<AllProps> = memo(
  ({ menuOpen, children }) => {
    return <SidebarSlide open={menuOpen}>{children}</SidebarSlide>
  }
)

const ConnectedSidebarSlide = connect(mapStateToProps)(SidebarSlideContainer)

export default ConnectedSidebarSlide
