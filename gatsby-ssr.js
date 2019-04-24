/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import wrapLayoutWithProvider from "./src/components/wrapLayoutWithProvider"

export const wrapPageElement = wrapLayoutWithProvider
