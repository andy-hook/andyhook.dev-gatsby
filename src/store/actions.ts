import { createAction, createPayloadedAction } from "./action-helpers"
import {
  FlushTokenAction,
  LoaderVisibleAction,
  SetTestStringAction,
} from "./types"

export const flushTokenAction = createAction<FlushTokenAction>(
  "auth/flush-token"
)

export const loaderVisibleAction = createPayloadedAction<LoaderVisibleAction>(
  "loader-visible"
)

export const setTestStringAction = createPayloadedAction<SetTestStringAction>(
  "set-test-string"
)
