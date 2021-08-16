import * as actionTypes from "../../redux/actionTypes";
import {
  loginAction,
  logoutAction,
  registerAction,
  currentUserAction,
} from "../../redux/actions/authActions";
import { mockStore } from "../../setupTests";

jest.fn(
  "../../firebase/firebase.js",
  () => new Promise((resolve) => resolve(true))
);

describe("auth actions", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  // Test yapmak istediğin zaman
  // email adresini değiştir
  it("should register", () => {
    expect.assertions(1);
    const user = {
      email: "senxix@gmail.com",
      password: "123456",
      name: "senixus",
    };

    return store
      .dispatch(registerAction(user.name, user.email, user.password))
      .then(() => {
        const action = store.getActions();
        const expectedAction = {
          type: actionTypes.REGISTER,
        };

        expect(action[0]).toMatchObject(expectedAction);
      });
  });

  it("should login", () => {
    const user = {
      email: "nihat@nihat.com",
      password: "123456",
    };

    expect.assertions(1);
    return store.dispatch(loginAction(user.email, user.password)).then(() => {
      const action = store.getActions();
      const expectedAction = {
        type: actionTypes.LOGIN,
      };

      expect(action[0]).toMatchObject(expectedAction);
    });
  });

  it("should logout", () => {
    expect.assertions(1);
    return store.dispatch(logoutAction()).then(() => {
      const action = store.getActions();
      const expectedAction = {
        type: actionTypes.LOGOUT,
      };

      expect(action[0]).toEqual(expectedAction);
    });
  });

  it("should return current user", () => {
    expect.assertions(1);
    return store.dispatch(currentUserAction()).then(() => {
      const action = store.getActions();
      const expectedAction = {
        type: actionTypes.CURRENT_USER,
        payload: null,
      };

      expect(action[0]).toEqual(expectedAction);
    });
  });
});
