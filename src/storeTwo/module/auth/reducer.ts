import { combineReducers } from "redux"
import * as Auth from "./types"

const siteVisible = (
  state: Auth.AuthStore["siteVisible"] = false,
  action: Auth.SiteVisibleAction
): Auth.AuthStore["siteVisible"] => {
  switch (action.type) {
    case "site-visible":
      return action.payload
    default:
      return state
  }
}

const testString = (
  state: Auth.AuthStore["testString"] = null,
  action: Auth.SetTestString
): Auth.AuthStore["testString"] => {
  switch (action.type) {
    case "set-test-string":
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers<Auth.AuthStore>({
  siteVisible,
  testString,
})

export default rootReducer
