import styled from "styled-components"
import { zIndex, darkGrey } from "@style/variables"
import { themeTone } from "@style/theme"
import { typeSupTitle, typeSizeBaseXs } from "@style/typography"
import { mq, scaleBetween } from "@style/media-queries"

export const AnimationScrim = styled.div`
  background-color: ${darkGrey(100)};
  position: fixed;

  opacity: 0;

  pointer-events: none;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: ${zIndex.floor};
`

export const Fixer = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: ${zIndex.high};

  visibility: hidden;
`

export const sidebarWidth = {
  initial: 100,
  thumb: 90,
  palm: 70,
  lap: 50,
  desk: 40,
  wide: 30,
  wall: 25,
}

export const Container = styled.div`
  position: absolute;

  top: 0;
  right: 0;
  height: 100%;
  width: ${sidebarWidth.initial}%;

  z-index: ${zIndex.high + 1};

  overflow-y: hidden;

  ${mq.lessThan("bottomThumb")`
    padding-top: 14rem;
  `}

  ${mq.greaterThan("topThumb")`
    width: ${sidebarWidth.thumb}%;
  `}

  ${mq.greaterThan("topPalm")`
    left: 0;
    width: ${sidebarWidth.palm}%;
  `}

  ${mq.greaterThan("topLap")`
    width: ${sidebarWidth.lap}%;
  `}

  ${mq.greaterThan("topDesk")`
    width: ${sidebarWidth.desk}%;
  `}

  ${mq.greaterThan("topWide")`
    width: ${sidebarWidth.wide}%;
  `}

  ${mq.greaterThan("topWall")`
    width: ${sidebarWidth.wall}%;
  `}

  ${scaleBetween("padding-top", "14rem", "14rem", "topThumb", "bottomPalm")}

  ${mq.greaterThan("topPalm")`
    display: flex;

    align-items: center;
  `}
`

export const Sidebar = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;

  ${mq.lessThan("bottomPalm")`
    flex-direction: column;
  `}

  ${mq.lessThan("bottomPalm")`
    padding-left: 2rem;
  `}
`

export const Contents = styled.div`
  position: relative;
  opacity: 0;

  z-index: ${zIndex.medium};
`

export const MenuBackboard = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${themeTone(100)};
  transform: translate3d(0, 0, 0);

  z-index: ${zIndex.low};

  opacity: 0;
`

export const ListTitle = styled.h2`
  ${typeSupTitle}
  ${typeSizeBaseXs}

  display: flex;
  align-items: center;

  margin-bottom: 1.75em;

  ${mq.greaterThan("topPalm")`
    margin-bottom: 2.3em;
  `}

  ${mq.greaterThan("topDesk")`
    margin-bottom: 3.5em;
  `}
`

export const ListTitleNumber = styled.span`
  font-size: 0.85em;
`

export const ListTitleDivider = styled.span`
  height: 0.063em;
  min-height: 1px;
  width: 0.7em;
  background-color: currentColor;
  margin-left: 0.5em;
  margin-right: 0.5em;
`
