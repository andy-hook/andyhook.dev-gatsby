import { createAction, createPayloadedAction } from "./action-helpers"
import {
  IFlushTokenAction,
  ILoaderVisibleAction,
  ISetTestStringAction,
  IFirstEntranceAction,
} from "../types/store"

export const flushTokenAction = createAction<IFlushTokenAction>(
  "auth/flush-token"
)

export const loaderVisibleAction = createPayloadedAction<ILoaderVisibleAction>(
  "loader-visible"
)

export const firstEntranceAction = createPayloadedAction<IFirstEntranceAction>(
  "first-entrance"
)

export const setTestStringAction = createPayloadedAction<ISetTestStringAction>(
  "set-test-string"
)
