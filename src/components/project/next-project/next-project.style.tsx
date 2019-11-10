import styled, { css } from "styled-components"
import Link from "gatsby-plugin-transition-link"
import { zIndex } from "@style/variables"
import { themeTone } from "@style/theme"

export const Container = styled.div`
  height: 64vh;

  position: relative;

  display: flex;

  align-items: center;
  justify-content: center;

  overflow: hidden;

  background-color: ${themeTone(200)};
`

export const StyledLink = styled(Link)`
  z-index: ${zIndex.floor};
`

export const SlideContainer = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  height: 100vh;
  width: 100%;

  pointer-events: none;
  visibility: hidden;

  z-index: ${zIndex.low};
`

export const absolutePositioning = css`
  position: absolute;

  top: 0;
  left: 0;

  height: 100%;
  width: 100%;
`

export const Slide = styled.div`
  ${absolutePositioning}

  overflow: hidden;

  z-index: ${zIndex.floor};
`

export const SlideInner = styled.div`
  ${absolutePositioning}

  background-color: ${themeTone(200)};

  transform: translate3d(0, 100%, 0);
`

export const SlideOver = styled.div`
  ${absolutePositioning}

  background-color: ${themeTone(100)};

  transform: translate3d(0, 100%, 0);

  z-index: ${zIndex.low};
`
