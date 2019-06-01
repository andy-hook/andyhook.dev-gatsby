import { TThemeName, TThemeType } from "@custom-types/theme"

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
  primaryTheme: TThemeName
  secondaryTheme: TThemeName
  menuOpen: boolean
  testString: string | null
  homeTheme: TThemeType
  topbarTheme: TThemeType
}

export interface IFlushTokenAction extends IAction<"auth/flush-token"> {}

export interface ISetTestStringAction
  extends IPayloadedAction<"set-test-string", string> {}

export interface ILoaderVisibleAction
  extends IPayloadedAction<"loader-visible", boolean> {}

export interface IFirstEntranceAction
  extends IPayloadedAction<"first-entrance", boolean> {}

export interface IMenuOpenAction
  extends IPayloadedAction<"menu-open", boolean> {}

export interface IPrimaryThemeAction
  extends IPayloadedAction<"primary-theme", TThemeName> {}

export interface ISecondaryThemeAction
  extends IPayloadedAction<"secondary-theme", TThemeName> {}

export interface IHomeThemeAction
  extends IPayloadedAction<"home-theme", TThemeType> {}

export interface ITopbarThemeAction
  extends IPayloadedAction<"topbar-theme", TThemeType> {}
