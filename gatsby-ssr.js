/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"
import Layout from "./src/components/layout"
import { Provider } from "react-redux"
import createStore from "./src/store/createStore"

export const wrapPageElement = ({ element }) => {
  // Instantiate inside to ensure fresh store for each SSR page
  const store = createStore()

  return (
    <Provider store={store}>
      <Layout>{element}</Layout>
    </Provider>
  )
}
