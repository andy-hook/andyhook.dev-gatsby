import React from "react"
import styled from "styled-components"
import { SocialItem } from "../../types"
import Icon from "../icon/icon"

interface Props {
  items: SocialItem[]
}

const Container = styled.div`
  display: flex;
  background-color: grey;
  font-size: 40px;
`
const Link = styled.a`
  color: red;

  &:not(:last-child) {
    margin-right: 0.2em;
  }
`
const StyledIcon = styled(Icon)`
  color: red;
`

const Social: React.FunctionComponent<Props> = ({ items }) => {
  const icons = items.map((item, key) => (
    <Link href={item.node.url} key={key.toString()} target="_blank">
      <StyledIcon name={item.node.label} />
    </Link>
  ))

  return <Container>{icons}</Container>
}

export default Social
