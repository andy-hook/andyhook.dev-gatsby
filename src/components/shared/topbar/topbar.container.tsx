import React, { memo, useState } from "react"
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
    const [hasScrolled, setHasScrolled] = useState(false)

    useScrollPosition(({ prevPos, currPos }) => {
      const canHideTopbar = currPos.y > prevPos.y
      const canShowTopbar = currPos.y <= prevPos.y

      if (currPos.y > 5) {
        setHasScrolled(true)
      } else if (currPos.y <= 5) {
        setHasScrolled(false)
      }

      if (canHideTopbar && topbarVisible && !menuOpen && !inView) {
        hideTopbar()
      } else if (canShowTopbar && !topbarVisible && !menuOpen) {
        showTopbar()
      }
    })

    return (
      <ThemeProvider theme={themes.dark}>
        <>
          <Topbar
            open={menuOpen}
            visible={topbarVisible}
            hasScrolled={hasScrolled}
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
