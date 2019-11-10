import styled, { css } from "styled-components"
import { mq } from "@style/media-queries"
import { sidebarWidth } from "@components/shared/menu/menu.style"

const applyTransform = (size: any) => {
  return css`
    transform: translate3d(${size}%, 0, 0);
  `
}

export const SlideAnimation = styled.div`
  &.is-open {
    ${applyTransform(sidebarWidth.initial)}

    ${mq.greaterThan("topThumb")`
      ${applyTransform(sidebarWidth.thumb)}
    `}

    ${mq.greaterThan("topPalm")`
      ${applyTransform(sidebarWidth.palm)}
    `}

    ${mq.greaterThan("topLap")`
      ${applyTransform(sidebarWidth.lap)}
    `}

    ${mq.greaterThan("topDesk")`
      ${applyTransform(sidebarWidth.desk)}
    `}

    ${mq.greaterThan("topWide")`
      ${applyTransform(sidebarWidth.wide)}
    `}

    ${mq.greaterThan("topWall")`
      ${applyTransform(sidebarWidth.wall)}
    `}
  }
`
