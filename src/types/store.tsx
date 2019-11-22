export interface IPayloadedAction<Type, Payload> {
  type: Type
  payload: Payload
}

export interface IAction<Type> {
  type: Type
}

export interface Store {
  loaderVisible: boolean
  firstEntrance: boolean
  menuOpen: boolean
  topbarVisible: boolean
}

export interface IFlushTokenAction extends IAction<"auth/flush-token"> {}

export interface SetTestStringAction
  extends IPayloadedAction<"set-test-string", string> {}

export interface LoaderVisibleAction
  extends IPayloadedAction<"loader-visible", boolean> {}

export interface FirstEntranceAction
  extends IPayloadedAction<"first-entrance", boolean> {}

export interface MenuOpenAction
  extends IPayloadedAction<"menu-open", boolean> {}

export interface TopbarVisibleAction
  extends IPayloadedAction<"topbar-visible", boolean> {}
