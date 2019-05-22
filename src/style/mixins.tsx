import { css } from "styled-components"
import { fontFamily, fontWeight, letterSpacing } from "@style/variables"

/* Typography
  ------------------------------------------------- */

export const typeDisplay = css`
  font-family: ${fontFamily.display};
  font-weight: ${fontWeight.display.semi};
  letter-spacing: ${letterSpacing.display};
`

export const typeTitle = css`
  ${typeDisplay}
  color: ${props => props.theme.text[200]};
`
