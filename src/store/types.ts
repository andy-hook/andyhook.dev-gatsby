import { Action, PayloadedAction } from "./action-helpers"

export interface Store {
  loaderVisible: boolean | false
  testString: string | null
}

export interface FlushTokenAction extends Action<"auth/flush-token"> {}

export interface SetTestStringAction
  extends PayloadedAction<"set-test-string", string> {}

export interface LoaderVisibleAction
  extends PayloadedAction<"loader-visible", boolean> {}
