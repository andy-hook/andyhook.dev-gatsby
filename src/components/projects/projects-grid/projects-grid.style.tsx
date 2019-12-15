import styled from "styled-components"

export const Grid = styled.div`
  display: grid;

  grid-gap: 50px;

  background-color: red;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fill, 1fr);
`

export const GridItem = styled.div`
  &:nth-child(even) {
    margin-top: -250px;
  }
`
