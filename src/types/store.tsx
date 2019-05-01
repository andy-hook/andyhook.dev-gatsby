export interface IPayloadedAction<Type, Payload> {
  type: Type
  payload: Payload
}

export interface IAction<Type> {
  type: Type
}

export interface IStore {
  loaderVisible: boolean
  firstEntrance: boolean
  testString: string | null
}

export interface IFlushTokenAction extends IAction<"auth/flush-token"> {}

export interface ISetTestStringAction
  extends IPayloadedAction<"set-test-string", string> {}

export interface ILoaderVisibleAction
  extends IPayloadedAction<"loader-visible", boolean> {}

export interface IFirstEntranceAction
  extends IPayloadedAction<"first-entrance", boolean> {}
