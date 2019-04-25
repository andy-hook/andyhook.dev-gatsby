/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React, { ReactNode } from "react"
import Layout from "./layout"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "../storeTwo/module/auth/reducer"

interface Props {
  element: ReactNode
}

const wrapLayoutWithProvider: React.FunctionComponent<Props> = ({
  element,
}) => {
  // Instantiating store in `wrapPageElement` ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts

  const store = createStore(rootReducer)

  return (
    <Provider store={store}>
      <Layout>{element}</Layout>
    </Provider>
  )
}

export default wrapLayoutWithProvider
