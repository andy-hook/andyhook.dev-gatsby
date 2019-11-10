import styled, { css } from "styled-components"
import { mq } from "@style/media-queries"
import { sidebarWidth } from "@components/shared/menu/menu.style"

const applyPositiveTransform = (size: any) => {
  return css`
    transform: translate3d(${size}%, 0, 0);
  `
}

const applyNegativeTransform = (size: any) => {
  return css`
    transform: translate3d(-${size}%, 0, 0);
  `
}

export const SlideAnimation = styled.div`
  &.is-open {
    ${mq.lessThan("bottomThumb")`
      ${applyNegativeTransform(sidebarWidth.initial)}
    `}
  
    ${mq.greaterThan("topThumb")`
      ${applyNegativeTransform(sidebarWidth.thumb)}
    `}

    ${mq.greaterThan("topPalm")`
      ${applyPositiveTransform(sidebarWidth.palm)}
    `}

    ${mq.greaterThan("topLap")`
      ${applyPositiveTransform(sidebarWidth.lap)}
    `}

    ${mq.greaterThan("topDesk")`
      ${applyPositiveTransform(sidebarWidth.desk)}
    `}

    ${mq.greaterThan("topWide")`
      ${applyPositiveTransform(sidebarWidth.wide)}
    `}

    ${mq.greaterThan("topWall")`
      ${applyPositiveTransform(sidebarWidth.wall)}
    `}
  }
  
`
