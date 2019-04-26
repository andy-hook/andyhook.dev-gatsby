export interface IPayloadedAction<Type, Payload> {
  type: Type
  payload: Payload
}

export interface IAction<Type> {
  type: Type
}

export function createPayloadedAction<
  TAction extends IPayloadedAction<TAction["type"], TAction["payload"]>
>(
  type: TAction["type"]
): (
  payload: TAction["payload"]
) => IPayloadedAction<TAction["type"], TAction["payload"]> {
  return (payload: TAction["payload"]) => ({
    type,
    payload,
  })
}

export function createAction<TAction extends IAction<TAction["type"]>>(
  type: TAction["type"]
): () => IAction<TAction["type"]> {
  return () => ({
    type,
  })
}
