import { combineReducers } from "redux"
import * as Auth from "./types"
import { assertNever } from "../../core"

const token = (
  state: Auth.AuthStore["token"] = null,
  action: Auth.TokenActions
): Auth.AuthStore["token"] => {
  switch (action.type) {
    case "auth/set-token":
      return action.payload
    case "auth/flush-token":
      return null
    default:
      return state
  }
}

const userId = (
  state: Auth.AuthStore["userId"] = null,
  action: Auth.UserIdActions
): Auth.AuthStore["userId"] => {
  switch (action.type) {
    case "auth/set-user-id":
      return action.payload
    case "auth/flush-token":
      return null
    default:
      assertNever(action)
      return state
  }
}

const userName = (
  state: Auth.AuthStore["userName"] = null,
  action: Auth.UserNameActions
): Auth.AuthStore["userName"] => {
  switch (action.type) {
    case "auth/set-user-name":
      return action.payload
    case "auth/flush-token":
      return null
    default:
      return state
  }
}

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

const rootReducer = combineReducers<Auth.AuthStore>({
  token,
  userId,
  userName,
  siteVisible,
})

export default rootReducer
