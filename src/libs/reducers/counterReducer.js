import * as actionTypes from "../actionTypes";

export const initialCounterState = {
  counterIncrement: 1,
  currentCount: 0,
};

export function counterReducer(state, action) {
  switch (action.type) {
    case actionTypes.CHANGE_COUNTER_INCREMENT:
      return { ...state, counterIncrement: action.payload };
    case actionTypes.ADD_TO_COUNTER:
      return {
        ...state,
        currentCount: state.currentCount + Number(state.counterIncrement),
      };
    case actionTypes.SUBTRACT_FROM_COUNTER:
      if (state.currentCount - state.counterIncrement >= 0) {
        return {
          ...state,
          currentCount: state.currentCount - state.counterIncrement,
        };
      }
      return {
        ...state,
        currentCount: 0,
      };
    case actionTypes.RESET_CURRENT_COUNT:
      return { ...state, currentCount: initialCounterState.currentCount };
    default:
      return state;
  }
}
