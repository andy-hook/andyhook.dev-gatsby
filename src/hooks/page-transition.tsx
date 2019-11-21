import { useEffect } from "react"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import {
  TRANSITION_STATUS_POP,
  TRANSITION_STATUS_ENTERING,
  TRANSITION_TYPE_ENTER,
  TRANSITION_STATUS_EXITING,
  TRANSITION_TYPE_EXIT,
  TRANSITION_TYPE_MENU_ENTER,
  TRANSITION_TYPE_NEXT_PROJECT_ENTER,
  TRANSITION_TYPE_NEXT_PROJECT_EXIT,
} from "@constants"

type callback = () => void

interface IAnimations {
  onPop?: callback
  onEnter?: callback
  onEnterFromProject?: callback
  onEnterFromMenu?: callback
  onExitFromProject?: callback
  onExit?: callback
}

const noop = () => undefined

function run(cb: callback | undefined) {
  cb = cb || noop
  cb()
}

const usePageTransition = ({
  onPop,
  onEnter,
  onEnterFromProject,
  onEnterFromMenu,
  onExitFromProject,
  onExit,
}: IAnimations) => {
  const transitionState = useTransitionState()

  useEffect(() => {
    const { transitionStatus, exit, entry } = transitionState
    const entryType = entry.state.animType
    const exitType = exit.state.animType

    switch (transitionStatus) {
      // Browser history change
      case TRANSITION_STATUS_POP:
        run(onPop)
        break

      // Entering
      case TRANSITION_STATUS_ENTERING:
        switch (entryType) {
          // Enter
          case TRANSITION_TYPE_ENTER:
            run(onEnter)

            break

          // Enter from project
          case TRANSITION_TYPE_NEXT_PROJECT_ENTER:
            run(onEnterFromProject)

            break

          // Enter from menu
          case TRANSITION_TYPE_MENU_ENTER:
            run(onEnterFromMenu)

            break

          // This clause works around bug with pushstate and history navigation
          // Hopefully this can be resolved and pop will run consistently
          // TODO – https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues/94
          default:
            run(onPop)
        }
        break

      // Exiting
      case TRANSITION_STATUS_EXITING:
        switch (exitType) {
          // Exit
          case TRANSITION_TYPE_EXIT:
            run(onExit)

            break

          // Exit from project
          case TRANSITION_TYPE_NEXT_PROJECT_EXIT:
            run(onExitFromProject)

            break
        }
        break
    }
  }, [transitionState.transitionStatus])
}

export default usePageTransition
