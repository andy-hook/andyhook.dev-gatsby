import React, { useEffect } from "react"
import styled from "styled-components"
import { rem } from "polished"
import { ISocialMeta, ISocialMetaItem } from "../../types/model"
import Icon from "../icon/icon"
import { mq } from "../../style/utils"
import classNames from "classnames"
import {
  borderRadius,
  easing,
  duration,
  borderThickness,
} from "../../style/variables"
import { Elastic, TimelineLite } from "gsap"
import { OutboundLink } from "gatsby-plugin-google-analytics"

interface Props {
  items: ISocialMeta
  className?: string
  visible?: boolean
}

type Icons =
  | "dribbble"
  | "instagram"
  | "linkedin"
  | "twitter"
  | "github"
  | "mail"

export interface RenderItems extends ISocialMetaItem {
  icon: Icons
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
      containerTL.fromTo(
        containerRef.current,
        0.6,
        {
          y: "100%",
        },
        {
          ease: Elastic.easeOut.config(0.8, 1),
          y: "0%",
          opacity: 1,
          clearProps: "transform",
        }
      )
    }
  })

  const getIconsToRender = () => {
    const renderItems: RenderItems[] = []

    renderItems.push({
      label: "Get in touch",
      url: "mailto:hello@andyhook.dev",
      icon: "mail",
    })

    Object.keys(items).map(key => {
      renderItems.push({
        label: items[key].label,
        url: items[key].url,
        icon: items[key].icon as Icons,
      })
    })

    return renderItems
  }

  const icons = getIconsToRender().map((item, key) => (
    <Link
      key={key.toString()}
      aria-label={item.label}
      target="_blank"
      href={item.url}
    >
      <StyledIcon name={item.icon} />
    </Link>
  ))

  return (
    <Container ref={containerRef} className={classNames("", className)}>
      <Restricter>{icons}</Restricter>
    </Container>
  )
}

const Container = styled.div`
  opacity: 0;
`

const Restricter = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ${mq.lessThan("bottomThumb")`
    max-width: ${rem("250px")};
    margin: auto;
  `}
`

const Link = styled(OutboundLink)`
  position: relative;
  display: block;
  color: #fff;

  padding: 0.75em;

  &:not(:last-child) {
    margin-right: 0.1em;
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
