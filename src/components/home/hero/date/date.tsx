import React, { memo } from "react"
import classNames from "classnames"
import { isTheme, themeLayer } from "@style/theme"
import styled from "styled-components"

interface Props {
  className?: string
}

const Date: React.FunctionComponent<Props> = memo(({ className }) => {
  return (
    <DateSvg viewBox="0 0 963 322" className={classNames("", className)}>
      <defs>
        <radialGradient
          cx="0%"
          cy="4%"
          fx="0%"
          fy="4%"
          r="126%"
          gradientTransform="translate(0.000000,0.045936),scale(1.000000,0.787975),rotate(51.801287),translate(-0.000000,-0.045936)"
          id="radialGradient-1"
        >
          <stop className="stop-one" offset="0%" />
          <stop className="stop-two" offset="22%" />
          <stop className="stop-three" offset="65%" />
          <stop className="stop-four" offset="100%" />
        </radialGradient>
        <path
          d="M115.40107,257.41573 L249,257.41573 L249,316 L14.2032086,316 L14.2032086,269.398876 L134.042781,156.224719 C161.561497,130.039326 166.44385,114.061798 166.44385,98.9719101 C166.44385,74.5617978 149.57754,60.3595506 116.73262,60.3595506 C90.1016043,60.3595506 67.4652406,70.5674157 52.3743316,91.4269663 L0,57.6966292 C23.9679144,22.6348315 67.4652406,0 123.390374,0 C192.631016,0 238.791444,35.505618 238.791444,91.8707865 C238.791444,122.050562 230.358289,149.567416 186.860963,189.955056 L115.40107,257.41573 Z"
          id="path-2"
        />
        <radialGradient
          cx="2%"
          cy="6%"
          fx="2%"
          fy="6%"
          r="120%"
          gradientTransform="translate(0.022042,0.065554),scale(1.000000,0.828660),rotate(53.344557),translate(-0.022042,-0.065554)"
          id="radialGradient-3"
        >
          <stop className="stop-one" offset="0%" />
          <stop className="stop-two" offset="13%" />
          <stop className="stop-three" offset="52%" />
          <stop className="stop-four" offset="100%" />
        </radialGradient>

        <path
          d="M401,321 C324.746667,321 268,262.918508 268,160.5 C268,58.0814917 324.746667,0 401,0 C477.696667,0 534,58.0814917 534,160.5 C534,262.918508 477.696667,321 401,321 Z M401.278388,261 C437.179487,261 462,231.666667 462,161 C462,90.3333333 437.179487,61 401.278388,61 C365.820513,61 341,90.3333333 341,161 C341,231.666667 365.820513,261 401.278388,261 Z"
          id="path-4"
        />
        <radialGradient
          cx="-8%"
          cy="-3%"
          fx="-8%"
          fy="-3%"
          r="250%"
          gradientTransform="translate(-0.087523,-0.033531),scale(1.000000,0.429032),rotate(57.615789),translate(0.087523,0.033531)"
          id="radialGradient-5"
        >
          <stop className="stop-one" offset="0%" />
          <stop className="stop-two" offset="20%" />
          <stop className="stop-three" offset="59%" />
          <stop className="stop-four" offset="100%" />
        </radialGradient>
        <polygon
          id="path-6"
          points="540 6 673 6 673 316 601.655629 316 601.655629 63.5714286 540 63.5714286"
        />
        <radialGradient
          cx="0%"
          cy="2%"
          fx="0%"
          fy="2%"
          r="146%"
          gradientTransform="translate(0.000000,0.029863),scale(1.000000,0.797508),rotate(51.081599),translate(-0.000000,-0.029863)"
          id="radialGradient-7"
        >
          <stop className="stop-one" offset="0%" />
          <stop className="stop-two" offset="10%" />
          <stop className="stop-three" offset="50%" />
          <stop className="stop-four" offset="100%" />
        </radialGradient>
        <path
          d="M823.370242,0 C909.294118,0 962,53.6477901 962,153.849448 C962,261.145028 897.778547,321 803.882353,321 C771.107266,321 739.6609,313.462707 717.958478,299.718232 L744.532872,246.957182 C761.363322,258.484807 781.294118,262.475138 802.553633,262.475138 C853.930796,262.475138 887.591696,231.882597 889.806228,172.027624 C871.647059,190.205801 845.072664,199.959945 812.740484,199.959945 C752.948097,199.959945 706,161.83011 706,103.305249 C706,39.9033149 757.820069,0 823.370242,0 Z M828.778243,147 C860.267782,147 882,127.421053 882,100.277512 C882,73.5789474 862.041841,54 827.891213,54 C797.288703,54 776,71.7990431 776,100.277512 C776,128.755981 796.845188,147 828.778243,147 Z"
          id="path-8"
        />
      </defs>
      <g
        id="date-copy-2"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Group"
          transform="translate(1.000000, 1.000000)"
          fillRule="nonzero"
        >
          <use className="number-bg" xlinkHref="#path-2" />
          <use
            className="number-highlight"
            fill="url(#radialGradient-1)"
            xlinkHref="#path-2"
          />

          <use className="number-bg" xlinkHref="#path-4" />
          <use
            className="number-highlight"
            fill="url(#radialGradient-3)"
            xlinkHref="#path-4"
          />

          <use className="number-bg" xlinkHref="#path-6" />
          <use
            className="number-highlight"
            fill="url(#radialGradient-5)"
            xlinkHref="#path-6"
          />

          <use className="number-bg" xlinkHref="#path-8" />
          <use
            className="number-highlight"
            fill="url(#radialGradient-7)"
            xlinkHref="#path-8"
          />
        </g>
      </g>
    </DateSvg>
  )
})

const DateSvg = styled.svg`
  fill: red;

  & .number-bg {
    fill: ${themeLayer("lowest")};
  }

  & .number-highlight {
    fill-opacity: ${isTheme("dark", "0.65", "1")};
  }

  & .stop-one {
    stop-color: ${themeLayer("highest")};
  }

  & .stop-two {
    stop-color: ${themeLayer("high")};
  }

  & .stop-three {
    stop-color: ${themeLayer("medium")};
  }

  & .stop-four {
    stop-color: ${themeLayer("low")};
  }
`

export default Date
