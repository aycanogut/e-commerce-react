import * as actionTypes from "../../redux/actionTypes";
import authReducer from "../../redux/reducers/authReducer";
import { initialValues } from "../../redux/initialValues/initialValues";

describe("auth reducer", () => {
  it("should return initial state", () => {
    expect(authReducer(undefined, {})).toEqual(initialValues);
  });

  it("should return current user", () => {
    const state = {
      user: {},
    };
    const action = {
      type: actionTypes.CURRENT_USER,
      payload: { id: 1, name: "Test", email: "test@test.com" },
    };
    expect(authReducer(state, action)).toEqual({
      user: {
        id: 1,
        name: "Test",
        email: "test@test.com",
      },
    });
  });
});
