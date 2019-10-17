import React, { memo, ReactNode } from "react"
import { IStore } from "@custom-types/store"
import { connect } from "react-redux"
import Home from "./home"

interface IProps {
  children: ReactNode
}

const mapStateToProps = ({ menuOpen }: IStore) => {
  return { menuOpen }
}

const HomeContainer: React.FunctionComponent<IProps> = memo(({ children }) => {
  return <Home>{children}</Home>
})

const ConnectedHomeContainer = connect(mapStateToProps)(HomeContainer)

export default ConnectedHomeContainer
