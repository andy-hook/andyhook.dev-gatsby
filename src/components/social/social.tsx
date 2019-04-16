import React from "react"
import styled from "styled-components"
import { SocialItem } from "../../types"
import Icon from "../icon/icon"
import classNames from "classnames"

interface Props {
  items: SocialItem[]
  className?: string
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const Link = styled.a`
  color: #fff;
  opacity: 0.15;

  &:not(:last-child) {
    margin-right: 1.4em;
  }
`
const StyledIcon = styled(Icon)``

const Social: React.FunctionComponent<Props> = ({ items, className }) => {
  const icons = items.map((item, key) => (
    <Link href={item.node.url} key={key.toString()} target="_blank">
      <StyledIcon name={item.node.label} />
    </Link>
  ))

  return <Container className={classNames("", className)}>{icons}</Container>
}

export default Social
