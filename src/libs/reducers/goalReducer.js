import * as actionTypes from "../actionTypes";

/* 
IDEA: Sub-reducers that only operate on a certain piece of state.
  - Have a state in a branch structure with branches for goal and counter (etc.). - see initialState below!
  - One reducer w/ switch 
  - In reducer, can hand the action to whichever sub-reducer is relevant with just the relevant state (e.g. state.goal)
  - As it returns the whole state, can chain 
  - Think thru overlaps - top level, but really shouldn't be there!!
  - Example in mainReducer below.
*/

export const initialState = {
  goal: {
    trackingType: "rows",
    goalTarget: 0, //What they set out from the start
    leftToDo: 0,
    percentComplete: 0,
  },
  counter: {
    counterIncrement: 1, //Amount current count goes up with each +
    currentCount: 0, //Current count as they increment up
  },
};

export const initialGoalState = {
  trackingType: "rows",
  goalTarget: 0,
  counterIncrement: 1,
  currentCount: 0,
  leftToDo: 0,
  percentComplete: 0,
};

export function mainReducer(state, action) {
  switch (action.type) {
    case actionTypes.CALCULATE_HOW_MANY_LEFT:
      if (state.goalTarget - state.currentCount <= 0) {
        return { ...state, leftToDo: 0 };
      }
      return {
        ...state,
        goal: {
          ...state.goal,
          leftToDo: state.goal.goalTarget - state.counter.currentCount,
        },
      };
    case actionTypes.CALCULATE_PERCENT_COMPLETE:
      const updatedPercentComplete =
        (state.currentCount / state.goalTarget) * 100;
      return {
        ...state,
        goal: {
          ...state.goal,
          percentComplete: updatedPercentComplete.toFixed(0),
        },
      };
  }

  return {
    ...state,
    goal: goalReducer(state.goal, action),
    counter: counterReducer(state.counter, action),
  };
}

export function goalReducer(state, action) {
  switch (action.type) {
    case actionTypes.CHANGE_GOAL_TYPE_ROWS:
      return { ...state, trackingType: "rows" };
    case actionTypes.CHANGE_GOAL_TYPE_STITCHES:
      return { ...state, trackingType: "stitches" };
    case actionTypes.CHANGE_GOAL_TARGET:
      if (typeof action.payload !== "number") {
        return state;
      }
      if (action.payload <= 0) {
        return { ...state, goalTarget: 0 };
      }
      return { ...state, goalTarget: action.payload };
    case actionTypes.RESET_GOAL_FORM:
      return initialGoalState;
    case actionTypes.CHANGE_COUNTER_INCREMENT:
      if (typeof action.payload !== "number") {
        return state;
      }
      if (action.payload <= 0) {
        return { ...state, counterIncrement: 1 };
      }
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
      return { ...state, currentCount: initialGoalState.currentCount };
    case actionTypes.CALCULATE_HOW_MANY_LEFT:
      if (state.goalTarget - state.currentCount <= 0) {
        return { ...state, leftToDo: 0 };
      }
      return { ...state, leftToDo: state.goalTarget - state.currentCount };
    case actionTypes.CALCULATE_PERCENT_COMPLETE:
      const updatedPercentComplete =
        (state.currentCount / state.goalTarget) * 100;
      return {
        ...state,
        percentComplete: updatedPercentComplete.toFixed(0),
      };
    default:
      return state;
  }
}
/* 
Options: 
  - Split up counter/goal, but how many left and percent complete live at the top level because they overlap
*/
