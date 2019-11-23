import styled from "styled-components"

export const OverlayList = styled.ul`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
`

export const OverlayListItem = styled.li`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: red;

  opacity: 0;

  &.active {
    opacity: 1;
  }
`
