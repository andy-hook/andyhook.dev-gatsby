import { css } from "styled-components"
import {
  fontFamily,
  fontWeight,
  letterSpacing,
  lineHeight,
  typeScale,
} from "@style/variables"
import { themeText } from "@style/theme"
import { scaleBetween, scaleGreaterThan } from "./media-queries"

/* Re-composibles
  ------------------------------------------------- */
export const typeBase = css`
  font-family: ${fontFamily.base};
`

export const typeBaseRegular = css`
  ${typeBase}
  font-weight: ${fontWeight.base.regular};
  letter-spacing: ${letterSpacing.base.regular};
`

export const typeBaseMedium = css`
  ${typeBase}
  font-weight: ${fontWeight.base.medium};
  letter-spacing: ${letterSpacing.base.medium};
`

export const typeBaseSemibold = css`
  ${typeBase}
  font-weight: ${fontWeight.base.semibold};
  letter-spacing: ${letterSpacing.base.semibold};
`

// Display
export const typeDisplay = css`
  font-family: ${fontFamily.display};
`

export const typeDisplayBold = css`
  ${typeDisplay}
  font-weight: ${fontWeight.display.bold};
  letter-spacing: ${letterSpacing.display.bold};
`

/* Composites
  ------------------------------------------------- */
export const typeTitle = css`
  ${typeDisplayBold}

  color: ${themeText(200)};
  line-height: ${lineHeight.display.tight};
`

export const typeSupTitle = css`
  ${typeBaseMedium}

  color: ${themeText(1000)};
  line-height: ${lineHeight.display.tight};
`

export const typeSubTitle = css`
  ${typeBaseMedium}

  color: ${themeText(200)};
  line-height: ${lineHeight.display.tight};
`

export const typeBodySubtle = css`
  ${typeBaseRegular}

  color: ${themeText(900)};
  line-height: ${lineHeight.display.tight};
`

/* Base type sizes
  ------------------------------------------------- */
export const typeSizeBaseXs = css`
  font-size: ${typeScale[3]};

  ${scaleBetween(
    "font-size",
    typeScale[3],
    typeScale[4],
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[4], "topUltra")}
`

export const typeSizeBaseSm = css`
  font-size: ${typeScale[4]};

  ${scaleBetween(
    "font-size",
    typeScale[4],
    typeScale[5],
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[5], "topUltra")}
`

export const typeSizeBaseMd = css``

export const typeSizeBaseLg = css`
  font-size: ${typeScale[4]};
  
  ${scaleBetween(
    "font-size",
    typeScale[4],
    typeScale[6],
    "topThumb",
    "bottomWide"
  )}

  ${scaleBetween(
    "font-size",
    typeScale[6],
    typeScale[7],
    "topWide",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[7], "topUltra")}
`

/* Display type sizes
  ------------------------------------------------- */
export const typeSizeDisplayXs = css``

export const typeSizeDisplaySm = css``

export const typeSizeDisplayMd = css`
  font-size: ${typeScale[7]};

  ${scaleBetween(
    "font-size",
    typeScale[7],
    typeScale[9],
    "topThumb",
    "bottomDesk"
  )}

  ${scaleBetween(
    "font-size",
    typeScale[9],
    typeScale[10],
    "topDesk",
    "bottomWall"
  )}

  ${scaleBetween(
    "font-size",
    typeScale[10],
    typeScale[11],
    "topWall",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[11], "topUltra")}
`

export const typeSizeDisplayLg = css`
  font-size: ${typeScale[8]};
  
  ${scaleBetween(
    "font-size",
    typeScale[8],
    typeScale[10],
    "topThumb",
    "bottomWide"
  )}

  ${scaleBetween(
    "font-size",
    typeScale[10],
    typeScale[11],
    "topWide",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[11], "topUltra")}
`

export const typeSizeDisplayXl = css`
  font-size: ${typeScale[9]};

  ${scaleBetween(
    "font-size",
    typeScale[9],
    typeScale[11],
    "bottomThumb",
    "bottomDesk"
  )}

  ${scaleBetween(
    "font-size",
    typeScale[11],
    typeScale[12],
    "topDesk",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[12], "topUltra")}
`
