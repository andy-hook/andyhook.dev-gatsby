export interface PayloadedAction<Type, Payload> {
  type: Type
  payload: Payload
}

export interface Action<Type> {
  type: Type
}

export function createPayloadedAction<
  ActionType extends PayloadedAction<ActionType["type"], ActionType["payload"]>
>(
  type: ActionType["type"]
): (
  payload: ActionType["payload"]
) => PayloadedAction<ActionType["type"], ActionType["payload"]> {
  return (payload: ActionType["payload"]) => ({
    type,
    payload,
  })
}

export function createAction<ActionType extends Action<ActionType["type"]>>(
  type: ActionType["type"]
): () => Action<ActionType["type"]> {
  return () => ({
    type,
  })
}
