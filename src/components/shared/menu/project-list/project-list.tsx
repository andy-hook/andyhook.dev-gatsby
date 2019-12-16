import React, { memo, MutableRefObject } from "react"
import { keys } from "@utils"
import { Projects } from "model"
import * as S from "./project-list.style"
import {
  TRANSITION_TYPE_MENU_ENTER,
  TRANSITION_TYPE_MENU_EXIT,
} from "@constants"
import useDeferredRunEffect from "@hooks/deferred-run"
import gsap from "gsap"

interface Props {
  projects: Projects
  open: boolean
  onClick: () => void
}

type Refs<T> = Array<MutableRefObject<T>>

const ProjectList: React.FunctionComponent<Props> = memo(
  ({ projects, onClick, open }) => {
    const projectKeys = keys(projects)
    const refs = projectKeys.map(React.createRef) as Refs<HTMLLIElement>
    const cachedRefs = React.useRef<Refs<HTMLLIElement>>(refs)

    const startDelay = 0.1

    const animateOpen = () => {
      cachedRefs.current.map((listItem, index) => {
        gsap.fromTo(
          listItem.current,
          {
            opacity: 0,
            y: `${50 + index * 25}%`,
          },
          {
            duration: 1,
            ease: "expo.out",
            delay: startDelay + index * 0.04,
            y: "0%",
            opacity: 1,
            clearProps: "transform",
            overwrite: true,
          }
        )
      })
    }

    const animateClosed = () => {
      cachedRefs.current.map(listItem => {
        gsap.to(listItem.current, {
          duration: 0.25,
          opacity: 0,
          clearProps: "opacity",
          overwrite: true,
        })
      })
    }

    useDeferredRunEffect(() => {
      open ? animateOpen() : animateClosed()
    }, [open])

    const projectItems = keys(projects).map((key, index) => {
      const ref = cachedRefs.current[index]

      return (
        <S.ProjectListItem key={index} ref={ref}>
          <S.ProjectLink
            onClick={onClick}
            to={projects[key].path}
            exit={{
              length: 0,
              state: {
                animType: TRANSITION_TYPE_MENU_EXIT,
              },
            }}
            entry={{
              length: 0.75,
              state: {
                animType: TRANSITION_TYPE_MENU_ENTER,
              },
            }}
          >
            {projects[key].label}
          </S.ProjectLink>
        </S.ProjectListItem>
      )
    })
    return (
      <S.ProjectListOuter>
        <S.ProjectList>{projectItems}</S.ProjectList>
      </S.ProjectListOuter>
    )
  }
)

export default ProjectList
