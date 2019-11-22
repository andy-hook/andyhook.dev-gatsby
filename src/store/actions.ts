import { createAction, createPayloadedAction } from "./action-helpers"
import {
  IFlushTokenAction,
  LoaderVisibleAction,
  FirstEntranceAction,
  MenuOpenAction,
  TopbarVisibleAction,
} from "@custom-types/store"

export const flushTokenAction = createAction<IFlushTokenAction>(
  "auth/flush-token"
)

export const loaderVisibleAction = createPayloadedAction<LoaderVisibleAction>(
  "loader-visible"
)

export const firstEntranceAction = createPayloadedAction<FirstEntranceAction>(
  "first-entrance"
)

export const menuOpenAction = createPayloadedAction<MenuOpenAction>("menu-open")

export const topbarVisibleAction = createPayloadedAction<TopbarVisibleAction>(
  "topbar-visible"
)
