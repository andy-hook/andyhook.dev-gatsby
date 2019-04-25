import { Action, PayloadedAction } from "../../core"

export interface AuthStore {
  siteVisible: boolean | false
  testString: string | null
}

export interface FlushTokenAction extends Action<"auth/flush-token"> {}

export interface SetTestString
  extends PayloadedAction<"set-test-string", string> {}

/* ------- */
export interface SiteVisibleAction
  extends PayloadedAction<"site-visible", boolean> {}
