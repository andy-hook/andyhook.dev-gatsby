import { combineReducers } from "redux"
import {
  IStore,
  ILoaderVisibleAction,
  ISetTestStringAction,
  IFirstEntranceAction,
  IMenuOpenAction,
  IPrimaryThemeAction,
  ISecondaryThemeAction,
} from "@custom-types/store"

const loaderVisible = (
  state: IStore["loaderVisible"] = false,
  action: ILoaderVisibleAction
): IStore["loaderVisible"] => {
  switch (action.type) {
    case "loader-visible":
      return action.payload
    default:
      return state
  }
}

const firstEntrance = (
  state: IStore["firstEntrance"] = true,
  action: IFirstEntranceAction
): IStore["firstEntrance"] => {
  switch (action.type) {
    case "first-entrance":
      return action.payload
    default:
      return state
  }
}

const menuOpen = (
  state: IStore["menuOpen"] = true,
  action: IMenuOpenAction
): IStore["menuOpen"] => {
  switch (action.type) {
    case "menu-open":
      return action.payload
    default:
      return state
  }
}

const primaryTheme = (
  state: IStore["primaryTheme"] = "dark",
  action: IPrimaryThemeAction
): IStore["primaryTheme"] => {
  switch (action.type) {
    case "primary-theme":
      return action.payload
    default:
      return state
  }
}

const secondaryTheme = (
  state: IStore["secondaryTheme"] = "light",
  action: ISecondaryThemeAction
): IStore["secondaryTheme"] => {
  switch (action.type) {
    case "secondary-theme":
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
  firstEntrance,
  menuOpen,
  primaryTheme,
  secondaryTheme,
})

export default rootReducer
