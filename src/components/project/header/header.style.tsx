import styled from "styled-components"
import { themeTone } from "@style/theme"

export const Container = styled.header`
  position: relative;
  height: 100vh;
  overflow: hidden;

  background-color: ${themeTone(200)};
`

export const BackgroundImage = styled.header`
  height: 100%;
  opacity: 0.2;
`
