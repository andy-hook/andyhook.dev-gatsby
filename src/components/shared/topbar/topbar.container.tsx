import React, { memo } from "react"
import Topbar from "./topbar"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { IStore } from "@custom-types/store"
import { menuOpenAction, topbarVisibleAction } from "@store/actions"
import { ThemeProvider } from "styled-components"
import { themes } from "@style/theme"
import useScrollPosition from "@hooks/use-scroll-position"
import * as S from "./topbar.style"
import { useInView } from "react-intersection-observer"

interface DispatchProps {
  openMenu: () => void
  closeMenu: () => void
  showTopbar: () => void
  hideTopbar: () => void
  menuOpen: IStore["menuOpen"]
  topbarVisible: IStore["topbarVisible"]
}

type ContainerProps = DispatchProps

const mapStateToProps = ({ menuOpen, topbarVisible }: IStore) => {
  return { menuOpen, topbarVisible }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    openMenu: () => {
      dispatch(menuOpenAction(true))
    },
    closeMenu: () => {
      dispatch(menuOpenAction(false))
    },
    showTopbar: () => {
      dispatch(topbarVisibleAction(true))
    },
    hideTopbar: () => {
      dispatch(topbarVisibleAction(false))
    },
  }
}

const TopbarContainer: React.FunctionComponent<ContainerProps> = memo(
  ({
    menuOpen,
    openMenu,
    closeMenu,
    topbarVisible,
    showTopbar,
    hideTopbar,
  }) => {
    const [offsetHolderInviewRef, inView] = useInView()

    useScrollPosition(({ prevPos, currPos }) => {
      const hideGrace = 50
      const showGrace = 50
      const canHideTopbar = currPos.y > prevPos.y + hideGrace
      const canShowTopbar = currPos.y <= prevPos.y - showGrace

      if (canHideTopbar && topbarVisible && !menuOpen && !inView) {
        hideTopbar()
      } else if (canShowTopbar && !topbarVisible && !menuOpen) {
        showTopbar()
      }
    }, 250)

    return (
      <ThemeProvider theme={menuOpen ? themes.light : themes.dark}>
        <>
          <Topbar
            open={menuOpen}
            visible={topbarVisible}
            openMenu={openMenu}
            closeMenu={closeMenu}
          />
          <S.HideOffsetHolder ref={offsetHolderInviewRef} />
        </>
      </ThemeProvider>
    )
  }
)

const ConnectedTopbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopbarContainer)

export default ConnectedTopbar
