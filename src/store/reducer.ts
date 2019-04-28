import { combineReducers } from "redux"
import {
  IStore,
  ILoaderVisibleAction,
  ISetTestStringAction,
} from "../types/store"

const loaderVisible = (
  state: IStore["loaderVisible"] = true,
  action: ILoaderVisibleAction
): IStore["loaderVisible"] => {
  switch (action.type) {
    case "loader-visible":
      return action.payload
    default:
      return state
  }
}

const testString = (
  state: IStore["testString"] = null,
  action: ISetTestStringAction
): IStore["testString"] => {
  switch (action.type) {
    case "set-test-string":
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers<IStore>({
  loaderVisible,
  testString,
})

export default rootReducer
