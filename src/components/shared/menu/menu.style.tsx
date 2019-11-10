import styled from "styled-components"
import { zIndex, darkGrey, spacingScale } from "@style/variables"
import { themeTone } from "@style/theme"
import { mq, scaleBetween, scaleGreaterThan } from "@style/media-queries"

export const AnimationScrim = styled.div`
  background-color: ${darkGrey(100)};
  position: fixed;

  opacity: 0;

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
  thumb: 70,
  palm: 55,
  lap: 45,
  desk: 35,
  wide: 35,
  wall: 23,
}

export const Container = styled.div`
  position: absolute;

  top: 0;

  height: 100%;

  width: ${sidebarWidth.initial}%;

  right: 0;

  z-index: ${zIndex.high + 1};

  overflow: hidden;

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

  ${mq.lessThan("bottomThumb")`
    padding-top: 14rem;
  `}

  ${scaleBetween("padding-top", "14rem", "14rem", "topThumb", "bottomPalm")}

  ${mq.greaterThan("topPalm")`
    display: flex;

    align-items: center;
  `}
`

export const Sidebar = styled.div`
  position: absolute;
  display: flex;

  align-items: center;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  padding-left: ${spacingScale[7]};
  padding-bottom: ${spacingScale[7]};

  ${scaleBetween(
    "padding-left",
    spacingScale[7],
    spacingScale[9],
    "topThumb",
    "bottomUltra"
  )}

  ${scaleBetween(
    "padding-bottom",
    spacingScale[7],
    spacingScale[9],
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("padding-left", spacingScale[9], "topUltra")}
  ${scaleGreaterThan("padding-bottom", spacingScale[9], "topUltra")}
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
