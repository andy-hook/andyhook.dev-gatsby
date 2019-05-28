import React, { memo } from "react"
import styled from "styled-components"
import { rem } from "polished"
import { ISocialMeta, ISocialMetaItem } from "@custom-types/model"
import Icon from "@components/shared/icon/icon"
import { mq } from "@style/utils"
import { themeText, isTheme } from "@style/theme"
import classNames from "classnames"
import {
  borderRadius,
  easing,
  duration,
  borderThickness,
} from "@style/variables"
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

const Social: React.FunctionComponent<Props> = memo(({ items, className }) => {
  const icons = Object.keys(items).map(key => (
    <Link
      key={key}
      aria-label={items[key].label}
      target={items[key].url.includes("mailto:") ? "" : "_blank"}
      href={items[key].url}
    >
      <StyledIcon name={items[key].icon} />
    </Link>
  ))

  return <Restricter className={classNames("", className)}>{icons}</Restricter>
})

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
  color: ${themeText(100)};

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
    border: ${borderThickness.regular} solid ${themeText(100)};

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
  opacity: ${isTheme("dark", "0.25", "0.4")};

  ${Link}:hover &,
  ${Link}:focus & {
    opacity: 1;
  }
`

export default Social
