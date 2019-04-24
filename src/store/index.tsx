import { createStore as reduxCreateStore } from "redux"

const INCREMENT = "INCREMENT"

export interface ApplicationState {
  readonly count: number
}

interface ActionTypes {
  type: typeof INCREMENT
}

// type Action = typeof ActionTypes[keyof typeof ActionTypes]

const initialState: ApplicationState = { count: 0 }

const RootReducer = (
  state: ApplicationState = initialState,
  action: ActionTypes
) => {
  if (action.type === `INCREMENT`) {
    return {
      ...state,
      count: state.count + 1,
    }
  }
  return state
}

const createStore = () => reduxCreateStore(RootReducer, initialState)

export default createStore
