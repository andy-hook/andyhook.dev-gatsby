import styled from "styled-components"
import { zIndex } from "@style/variables"
import { themeToneAlpha, themeTone } from "@style/theme"

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const DetailsPos = styled.div`
  position: relative;

  width: 100%;

  margin-bottom: -6vh;

  z-index: ${zIndex.low};

  opacity: 0;

  will-change: transform;
`

export const BackgroundContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  overflow: hidden;

  z-index: ${zIndex.floor};

  opacity: 0;
`

export const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: ${zIndex.medium};

  background: linear-gradient(
    175deg,
    ${themeToneAlpha(100, 0)} 25%,
    ${themeTone(100)} 65%
  );
`
