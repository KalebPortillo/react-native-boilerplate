import { createSelector } from 'reselect'

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
export const increment = () => ({ type: INCREMENT })

export const reset = () => ({ type: RESET })

export const random = () => ({
  type: RANDOM_REQUEST
})

export const requestRandomNumber = () => async dispatch => {
  dispatch({
    type: RANDOM_RESPONSE,
    payload: 1
  })
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 2 }

    case RESET:
      return initialState

    case RANDOM_RESPONSE:
      return {
        loading: false,
        state: action.payload
      }

    default:
      return state
  }
}

// Selectors
export const selectValue = state => state.counter.value
export const selectLoading = state => state.counter.loading

// Memoized Selectors
export const valueSelector = createSelector([selectValue], value => value)
