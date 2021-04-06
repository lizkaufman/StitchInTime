import * as actionTypes from "../actionTypes";

export const initialGoalState = {
  trackingType: "rows",
  goalTarget: 0,
  counterIncrement: 1,
  currentCount: 0,
  leftToDo: 0,
  percentComplete: 0,
};

export function goalReducer(state, action) {
  switch (action.type) {
    case actionTypes.CHANGE_GOAL_TYPE_ROWS:
      return { ...state, trackingType: "rows" };
    case actionTypes.CHANGE_GOAL_TYPE_STITCHES:
      return { ...state, trackingType: "stitches" };
    case actionTypes.CHANGE_GOAL_TARGET:
      return { ...state, goalTarget: action.payload };
    case actionTypes.RESET_GOAL_FORM:
      return initialGoalState;
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
    case actionTypes.CALCULATE_HOW_MANY_LEFT:
      return { ...state, leftToDo: state.goalTarget - state.currentCount };
    case actionTypes.CALCULATE_PERCENT_COMPLETE:
      const updatedPercentComplete =
        (state.currentCount / state.goalTarget) * 100;
      return { ...state, percentComplete: updatedPercentComplete.toFixed(1) };
    default:
      return state;
  }
}