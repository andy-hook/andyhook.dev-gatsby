import { createAction, createPayloadedAction } from "./action-helpers"
import { FlushTokenAction, SiteVisibleAction, SetTestString } from "./types"

export const flushTokenAction = createAction<FlushTokenAction>(
  "auth/flush-token"
)

export const siteVisibleAction = createPayloadedAction<SiteVisibleAction>(
  "site-visible"
)

export const setTestStringAction = createPayloadedAction<SetTestString>(
  "set-test-string"
)
