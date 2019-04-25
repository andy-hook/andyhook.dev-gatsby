import { combineReducers } from "redux"
import { Store, SiteVisibleAction, SetTestString } from "./types"

const siteVisible = (
  state: Store["siteVisible"] = false,
  action: SiteVisibleAction
): Store["siteVisible"] => {
  switch (action.type) {
    case "site-visible":
      return action.payload
    default:
      return state
  }
}

const testString = (
  state: Store["testString"] = null,
  action: SetTestString
): Store["testString"] => {
  switch (action.type) {
    case "set-test-string":
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers<Store>({
  siteVisible,
  testString,
})

export default rootReducer
