import { initialGoalState, goalReducer } from "./goalReducer";
import * as actionTypes from "../actionTypes";

describe("Goal type and target action types: ", () => {
  test("When CHANGE_GOAL_TYPE_ROWS is called, state.trackingType should equal 'rows'", () => {
    const testState = { ...initialGoalState, trackingType: "stitches" };
    const expected = initialGoalState;
    const actual = goalReducer(testState, {
      type: actionTypes.CHANGE_GOAL_TYPE_ROWS,
    });
    expect(actual).toEqual(expected);
  });
  test.skip("", () => {});
  test.skip("", () => {});
  test.skip("", () => {});
});
describe("Counter action types: ", () => {
  test.skip("", () => {});
  test.skip("", () => {});
  test.skip("", () => {});
  test.skip("", () => {});
});
describe("Amount and percentage left action types: ", () => {
  test.skip("", () => {});
  test.skip("", () => {});
  test.skip("", () => {});
  test.skip("", () => {});
});
