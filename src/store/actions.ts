import { createAction, createPayloadedAction } from "./action-helpers"
import {
  IFlushTokenAction,
  ILoaderVisibleAction,
  ISetTestStringAction,
  IFirstEntranceAction,
  IMenuOpenAction,
  IPrimaryThemeAction,
  ISecondaryThemeAction,
  IHomeThemeAction,
  ITopbarThemeAction,
} from "@custom-types/store"

export const flushTokenAction = createAction<IFlushTokenAction>(
  "auth/flush-token"
)

export const loaderVisibleAction = createPayloadedAction<ILoaderVisibleAction>(
  "loader-visible"
)

export const firstEntranceAction = createPayloadedAction<IFirstEntranceAction>(
  "first-entrance"
)

export const menuOpenAction = createPayloadedAction<IMenuOpenAction>(
  "menu-open"
)

export const setTestStringAction = createPayloadedAction<ISetTestStringAction>(
  "set-test-string"
)

export const setPrimaryThemeAction = createPayloadedAction<IPrimaryThemeAction>(
  "primary-theme"
)

export const setHomeThemeAction = createPayloadedAction<IHomeThemeAction>(
  "home-theme"
)

export const setTopbarAction = createPayloadedAction<ITopbarThemeAction>(
  "topbar-theme"
)

export const setSecondaryThemeAction = createPayloadedAction<
  ISecondaryThemeAction
>("secondary-theme")
