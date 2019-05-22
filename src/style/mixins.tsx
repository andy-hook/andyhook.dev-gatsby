import { css } from "styled-components"
import { fontFamily, fontWeight, letterSpacing } from "@style/variables"
import { themeText } from "@style/theme"

/* Typography
  ------------------------------------------------- */

export const typeDisplay = css`
  font-family: ${fontFamily.display};
  font-weight: ${fontWeight.display.semi};
  letter-spacing: ${letterSpacing.display};
`

export const typeTitle = css`
  ${typeDisplay}
  color: ${themeText(200)};
`
