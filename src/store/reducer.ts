import { combineReducers } from "redux"
import { Store, LoaderVisibleAction, SetTestStringAction } from "./types"

const loaderVisible = (
  state: Store["loaderVisible"] = false,
  action: LoaderVisibleAction
): Store["loaderVisible"] => {
  switch (action.type) {
    case "loader-visible":
      return action.payload
    default:
      return state
  }
}

const testString = (
  state: Store["testString"] = null,
  action: SetTestStringAction
): Store["testString"] => {
  switch (action.type) {
    case "set-test-string":
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers<Store>({
  loaderVisible,
  testString,
})

export default rootReducer
