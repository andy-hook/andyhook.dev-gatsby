import React, { memo } from "react"
import styled from "styled-components"
import { darkGrey } from "@style/variables"
import Link from "gatsby-plugin-transition-link"
import classNames from "classnames"

interface Props {
  inverted?: boolean
  className?: string
}

const Logo: React.FunctionComponent<Props> = memo(
  ({ inverted = false, className }) => {
    const logoReturnAnimation = inverted
      ? "enter-from-nav"
      : "enter-from-project"

    return (
      <Link
        className={classNames("", className)}
        to="/"
        entry={{
          length: 0.5,
          state: {
            animType: logoReturnAnimation,
          },
        }}
        exit={{
          length: 0.5,
          state: {
            animType: "exit-to-home",
          },
        }}
      >
        <LogoMark inverted={inverted} viewBox="0 0 78 78">
          <defs>
            <linearGradient
              x1="-35%"
              y1="20%"
              x2="86%"
              y2="73%"
              id="LogoLinearGradient"
            >
              <stop className="stop-one" offset="0%" />
              <stop className="stop-two" offset="100%" />
            </linearGradient>
          </defs>

          <rect
            fill="url(#LogoLinearGradient)"
            transform="rotate(45 38.89 38.536)"
            x="11.391"
            y="11.036"
            width="55"
            height="55"
            rx="5"
          />
          <path
            d="M41.126 36.264l4.377-11.338c.218-.592-.699-.98-1.208-.499L28.363 40.424c-.412.414-.038.972.585.907l5.923-.623-4.374 11.366c-.217.592.699.98 1.208.499l15.932-15.997c.412-.414.036-1-.588-.935l-5.923.623z"
            fill="#FFF"
          />
        </LogoMark>
      </Link>
    )
  }
)

const LogoMark = styled.svg<Props>`
  transition: transform 0.3s ease;
  font-size: 1em;
  width: 1em;
  height: 1em;

  ${props => props.inverted && "transform: rotate(0deg)"};

  & .stop-one {
    stop-color: ${darkGrey(500)};
  }

  & .stop-two {
    stop-color: ${darkGrey(300)};
  }
`

export default Logo
