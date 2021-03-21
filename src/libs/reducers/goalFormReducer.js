import * as actionTypes from "../actionTypes";

export const initialGoalFormState = {
  trackingType: "rows",
  goalTarget: 0,
};

export function goalFormReducer(state, action) {
  switch (action.type) {
    case actionTypes.CHANGE_GOAL_TYPE_ROWS:
      return { ...state, trackingType: "rows" };
    case actionTypes.CHANGE_GOAL_TYPE_STITCHES:
      return { ...state, trackingType: "stitches" };
    case actionTypes.CHANGE_GOAL_TARGET:
      return { ...state, goalTarget: action.payload };
    case actionTypes.RESET_GOAL_FORM:
      return initialGoalFormState;
    default:
      return state;
  }
}
