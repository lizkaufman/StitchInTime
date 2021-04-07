import { initialGoalState, goalReducer } from "./goalReducer";
import * as actionTypes from "../actionTypes";
import { act } from "react-test-renderer";

describe("Goal type and target action types: ", () => {
  test(`When ${actionTypes.CHANGE_GOAL_TYPE_ROWS} is called, state.trackingType should equal 'rows'`, () => {
    const testState = { ...initialGoalState, trackingType: "stitches" };
    const expected = initialGoalState;
    const actual = goalReducer(testState, {
      type: actionTypes.CHANGE_GOAL_TYPE_ROWS,
    });
    expect(actual).toEqual(expected);
  });
  test(`When ${actionTypes.CHANGE_GOAL_TYPE_STITCHES} is called, state.trackingType should equal 'stitches'`, () => {
    const expected = { ...initialGoalState, trackingType: "stitches" };
    const actual = goalReducer(initialGoalState, {
      type: actionTypes.CHANGE_GOAL_TYPE_STITCHES,
    });
    expect(actual).toEqual(expected);
  });
  test(`When ${actionTypes.CHANGE_GOAL_TARGET} is called with a number payload > 0, state.goalTarget should equal the payload`, () => {
    const expected = [
      { ...initialGoalState, goalTarget: 1 },
      { ...initialGoalState, goalTarget: 5 },
      { ...initialGoalState, goalTarget: 10 },
    ];
    const actual = [
      goalReducer(initialGoalState, {
        type: actionTypes.CHANGE_GOAL_TARGET,
        payload: 1,
      }),
      goalReducer(initialGoalState, {
        type: actionTypes.CHANGE_GOAL_TARGET,
        payload: 5,
      }),
      goalReducer(initialGoalState, {
        type: actionTypes.CHANGE_GOAL_TARGET,
        payload: 10,
      }),
    ];
    expect(actual).toEqual(expected);
  });
  test(`When ${actionTypes.CHANGE_GOAL_TARGET} is called with a number payload <= 0, state.goalTarget should equal 0`, () => {
    const expected = [
      { ...initialGoalState, goalTarget: 0 },
      { ...initialGoalState, goalTarget: 0 },
      { ...initialGoalState, goalTarget: 0 },
    ];
    const actual = [
      goalReducer(initialGoalState, {
        type: actionTypes.CHANGE_GOAL_TARGET,
        payload: 0,
      }),
      goalReducer(initialGoalState, {
        type: actionTypes.CHANGE_GOAL_TARGET,
        payload: -1,
      }),
      goalReducer(initialGoalState, {
        type: actionTypes.CHANGE_GOAL_TARGET,
        payload: -5,
      }),
    ];
    expect(actual).toEqual(expected);
  });
  test(`When ${actionTypes.CHANGE_GOAL_TARGET} is called with a payload of type != number, state.goalTarget should remain unchanged`, () => {
    const expected = [initialGoalState, initialGoalState, initialGoalState];
    const actual = [
      goalReducer(initialGoalState, {
        type: actionTypes.CHANGE_GOAL_TARGET,
        payload: "five",
      }),
      goalReducer(initialGoalState, {
        type: actionTypes.CHANGE_GOAL_TARGET,
        payload: true,
      }),
      goalReducer(initialGoalState, {
        type: actionTypes.CHANGE_GOAL_TARGET,
        payload: { goal: 5 },
      }),
    ];
    expect(actual).toEqual(expected);
  });
});

describe("Counter action types: ", () => {
  test(`When ${actionTypes.CHANGE_COUNTER_INCREMENT} is called with a number > 0, change state.counterIncrement to that number`, () => {
    const expected = [
      initialGoalState,
      { ...initialGoalState, counterIncrement: 2 },
      { ...initialGoalState, counterIncrement: 5 },
    ];
    const actual = [
      goalReducer(initialGoalState, {
        type: actionTypes.CHANGE_COUNTER_INCREMENT,
        payload: 1,
      }),
      goalReducer(initialGoalState, {
        type: actionTypes.CHANGE_COUNTER_INCREMENT,
        payload: 2,
      }),
      goalReducer(initialGoalState, {
        type: actionTypes.CHANGE_COUNTER_INCREMENT,
        payload: 5,
      }),
    ];
    expect(actual).toEqual(expected);
  });
  test(`When ${actionTypes.CHANGE_COUNTER_INCREMENT} is called with a number <= 0, change state.counterIncrement to 1`, () => {
    const expected = [initialGoalState, initialGoalState, initialGoalState];
    const actual = [
      goalReducer(initialGoalState, {
        type: actionTypes.CHANGE_COUNTER_INCREMENT,
        payload: 0,
      }),
      goalReducer(initialGoalState, {
        type: actionTypes.CHANGE_COUNTER_INCREMENT,
        payload: -1,
      }),
      goalReducer(initialGoalState, {
        type: actionTypes.CHANGE_COUNTER_INCREMENT,
        payload: -5,
      }),
    ];
    expect(actual).toEqual(expected);
  });
  test(`When ${actionTypes.CHANGE_COUNTER_INCREMENT} is called with a payload of type != number, state.counterIncrement should remain unchanged`, () => {
    const expected = [initialGoalState, initialGoalState, initialGoalState];
    const actual = [
      goalReducer(initialGoalState, {
        type: actionTypes.CHANGE_COUNTER_INCREMENT,
        payload: "two",
      }),
      goalReducer(initialGoalState, {
        type: actionTypes.CHANGE_COUNTER_INCREMENT,
        payload: true,
      }),
      goalReducer(initialGoalState, {
        type: actionTypes.CHANGE_COUNTER_INCREMENT,
        payload: { counter: 2 },
      }),
    ];
    expect(actual).toEqual(expected);
  });
  test(`When ${actionTypes.ADD_TO_COUNTER} is called, state.currentCount should increase by state.counterIncrement`, () => {
    const testState = { ...initialGoalState, counterIncrement: 2 };
    const expected = [
      { ...initialGoalState, currentCount: 1 },
      { ...testState, currentCount: 2 },
    ];
    const actual = [
      goalReducer(initialGoalState, { type: actionTypes.ADD_TO_COUNTER }),
      goalReducer(testState, { type: actionTypes.ADD_TO_COUNTER }),
    ];
    expect(actual).toEqual(expected);
  });
  test(`When ${actionTypes.SUBTRACT_FROM_COUNTER} is called and state.currentCount > 0, state.currentCount should decrease by state.counterIncrement`, () => {
    const testStates = [
      { ...initialGoalState, currentCount: 1 },
      { ...initialGoalState, currentCount: 2, counterIncrement: 2 },
      { ...initialGoalState, currentCount: 6, counterIncrement: 3 },
    ];
    const expected = [
      { ...testStates[0], currentCount: 0 },
      { ...testStates[1], currentCount: 0 },
      { ...testStates[2], currentCount: 3 },
    ];
    const actual = testStates.map((state) =>
      goalReducer(state, { type: actionTypes.SUBTRACT_FROM_COUNTER })
    );
    expect(actual).toEqual(expected);
  });
  test(`When ${actionTypes.SUBTRACT_FROM_COUNTER} is called and state.currentCount === 0, state.currentCount should remain 0`, () => {
    const expected = initialGoalState;
    const actual = goalReducer(initialGoalState, {
      type: actionTypes.SUBTRACT_FROM_COUNTER,
    });
    expect(actual).toEqual(expected);
  });
  test(`When ${actionTypes.RESET_CURRENT_COUNT} is called, state.currentCount should become initial state's value, and all the other properties within state should remain unchanged`, () => {
    const testStates = [
      { ...initialGoalState, currentCount: 2 },
      {
        ...initialGoalState,
        currentCount: 5,
        counterIncrement: 2,
        goalTarget: 10,
      },
    ];
    const expected = [
      initialGoalState,
      { ...testStates[1], currentCount: initialGoalState.currentCount },
    ];
    const actual = testStates.map((state) =>
      goalReducer(state, { type: actionTypes.RESET_CURRENT_COUNT })
    );
    expect(actual).toEqual(expected);
  });
});

describe("Amount and percentage left action types: ", () => {
  test(`When ${actionTypes.CALCULATE_HOW_MANY_LEFT} is called if state.goalTarget - state.currentCount <= 0, state.leftToDo should be 0`, () => {
    const testStates = [
      { ...initialGoalState, goalTarget: 10, currentCount: 10 },
      { ...initialGoalState, goalTarget: 1, currentCount: 2 },
      { ...initialGoalState, goalTarget: 10, currentCount: 15 },
    ];
    const expected = testStates.map((state) => {
      return { ...state, leftToDo: 0 };
    });
    const actual = testStates.map((state) =>
      goalReducer(state, { type: actionTypes.CALCULATE_HOW_MANY_LEFT })
    );
    expect(actual).toEqual(expected);
  });
  test(`When ${actionTypes.CALCULATE_HOW_MANY_LEFT} is called if state.goalTarget - state.goalTarget > 0, state.leftToDo should be the difference between state.goalTarget and state.goalTarget`, () => {
    const testStates = [
      { ...initialGoalState, goalTarget: 3, currentCount: 0 },
      { ...initialGoalState, goalTarget: 5, currentCount: 2 },
      { ...initialGoalState, goalTarget: 10, currentCount: 5 },
    ];
    const expected = testStates.map((state) => {
      return { ...state, leftToDo: state.goalTarget - state.currentCount };
    });
    const actual = testStates.map((state) =>
      goalReducer(state, { type: actionTypes.CALCULATE_HOW_MANY_LEFT })
    );
    expect(actual).toEqual(expected);
  });
  test(`When ${actionTypes.CALCULATE_PERCENT_COMPLETE} is called, state.percentComplete should become (state.currentCount / state.goalTarget) * 100 rounded the nearest whole number`, () => {
    const testStates = [
      { ...initialGoalState, goalTarget: 3, currentCount: 0 },
      { ...initialGoalState, goalTarget: 3, currentCount: 3 },
      { ...initialGoalState, goalTarget: 3, currentCount: 2 },
      { ...initialGoalState, goalTarget: 10, currentCount: 5 },
    ];
    const expected = [
      {
        ...initialGoalState,
        goalTarget: 3,
        currentCount: 0,
        percentComplete: 0,
      },
      {
        ...initialGoalState,
        goalTarget: 3,
        currentCount: 3,
        percentComplete: 100,
      },
      {
        ...initialGoalState,
        goalTarget: 3,
        currentCount: 2,
        percentComplete: 67,
      },
      {
        ...initialGoalState,
        goalTarget: 10,
        currentCount: 5,
        percentComplete: 50,
      },
    ];
    const actual = testStates.map((state) =>
      goalReducer(state, { type: actionTypes.CALCULATE_PERCENT_COMPLETE })
    );
    expect(actual).toEqual(expected);
  });
});

describe("Reset action type: ", () => {
  test(`When ${actionTypes.RESET_GOAL_FORM} is called, return the initial state`, () => {
    const testState = {
      trackingType: "stitches",
      goalTarget: 10,
      counterIncrement: 2,
      currentCount: 4,
      leftToDo: 6,
      percentComplete: 40,
    };
    const expected = initialGoalState;
    const actual = goalReducer(testState, {
      type: actionTypes.RESET_GOAL_FORM,
    });
    expect(actual).toEqual(expected);
  });
});
