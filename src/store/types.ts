import { IAction, IPayloadedAction } from "./action-helpers"

export interface Store {
  loaderVisible: boolean | false
  testString: string | null
}

export interface IFlushTokenAction extends IAction<"auth/flush-token"> {}

export interface ISetTestStringAction
  extends IPayloadedAction<"set-test-string", string> {}

export interface ILoaderVisibleAction
  extends IPayloadedAction<"loader-visible", boolean> {}
