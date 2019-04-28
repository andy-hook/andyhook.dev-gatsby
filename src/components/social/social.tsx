import React, { useEffect } from "react"
import styled from "styled-components"
import { SocialMeta } from "../../types/model"
import Icon from "../icon/icon"
import classNames from "classnames"
import changeCase from "change-case"
import {
  borderRadius,
  easing,
  duration,
  borderThickness,
} from "../../style/variables"
import { Expo, TimelineLite } from "gsap"

interface Props {
  items: SocialMeta
  className?: string
  visible?: boolean
}

type ref = React.MutableRefObject<HTMLImageElement>

const Social: React.FunctionComponent<Props> = ({
  items,
  className,
  visible = true,
}) => {
  const containerRef: ref = React.useRef() as ref
  const containerTL = new TimelineLite()

  useEffect(() => {
    if (visible) {
      containerTL.to(containerRef.current, 0.5, {
        ease: Expo.easeOut,
        transform: "translate3d(0,0,0)",
        opacity: 1,
      })
    }
  })

  const icons = Object.keys(items).map(key => (
    <Link
      key={key.toString()}
      aria-label={changeCase.upperCaseFirst(items[key].label)}
      target="_blank"
      href={items[key].url}
    >
      <StyledIcon name={items[key].label} />
    </Link>
  ))

  return (
    <Container ref={containerRef} className={classNames("", className)}>
      {icons}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;

  transform: translate3d(0, 100%, 0);
  opacity: 0;
`
const Link = styled.a`
  position: relative;
  display: block;
  color: #fff;

  padding: 0.75em;

  &:not(:last-child) {
    margin-right: 0.3em;
  }

  &::after {
    transition: transform ${duration.slow} ${easing("subtleBounce")},
      opacity ${duration.fast} linear;

    content: "";
    position: absolute;

    top: 0.1em;
    left: 0.1em;
    right: 0.1em;
    bottom: 0.1em;
    border: ${borderThickness.regular} solid #fff;

    border-radius: ${borderRadius.circle};

    opacity: 0;

    transform: scale(1.5);

    pointer-events: none;
  }

  &:focus {
    outline: none;
  }

  &:hover::after,
  &:focus::after {
    opacity: 0.15;
    transform: scale(1);
  }
`
const StyledIcon = styled(Icon)`
  transition: opacity ${duration.slow} ${easing("subtleBounce")};
  opacity: 0.25;

  ${Link}:hover &,
  ${Link}:focus & {
    opacity: 1;
  }
`

export default Social
