/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React, { ReactNode } from "react"
import Layout from "./layout"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "../store/reducer"
import { composeWithDevTools } from "redux-devtools-extension"

interface Props {
  element: ReactNode
}

const wrapLayoutWithProvider: React.FunctionComponent<Props> = ({
  element,
}) => {
  // Instantiating store in `wrapPageElement` ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  //  – Redux dev tools enabled by passing composeWithDevTools
  const store = createStore(rootReducer, composeWithDevTools())

  return (
    <Provider store={store}>
      <Layout>{element}</Layout>
    </Provider>
  )
}

export default wrapLayoutWithProvider
