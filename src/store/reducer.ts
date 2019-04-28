import { combineReducers } from "redux"
import {
  Store,
  ILoaderVisibleAction,
  ISetTestStringAction,
} from "../types/store"

const loaderVisible = (
  state: Store["loaderVisible"] = true,
  action: ILoaderVisibleAction
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
  action: ISetTestStringAction
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
