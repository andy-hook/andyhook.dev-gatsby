/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import Layout from "./src/components/layout"
import { Provider } from "react-redux"
import createStore from "./src/store/createStore"

// Instantiate store outside here to avoid it being re-assigned in browser
const store = createStore()

export const wrapPageElement = ({ element }) => {
  return (
    <Provider store={store}>
      <Layout>{element}</Layout>
    </Provider>
  )
}
