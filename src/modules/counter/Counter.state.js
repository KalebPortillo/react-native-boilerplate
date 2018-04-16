// Initial state
const initialState = {
  value: 0,
  loading: false
}

// Actions
const INCREMENT = 'CounterState/INCREMENT'
const RESET = 'CounterState/RESET'
const RANDOM_REQUEST = 'CounterState/RANDOM_REQUEST'
const RANDOM_RESPONSE = 'CounterState/RANDOM_RESPONSE'

// Action creators
export function increment() {
  return { type: INCREMENT }
}

export function reset() {
  return { type: RESET }
}

export function random() {
  return {
    type: RANDOM_REQUEST
  }
}

export async function requestRandomNumber() {
  return {
    type: RANDOM_RESPONSE,
    payload: 1
  }
}

// Reducer
export default function CounterReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 }

    case RESET:
      return initialState

    // case RANDOM_RESPONSE:
    //   return {
    //     loading: false,
    //     state: action.payload
    //   }

    default:
      return state
  }
}
