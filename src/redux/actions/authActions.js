import * as actionTypes from "../actionTypes";
import { auth } from "../../firebase/firebase";

export const loginAction = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      dispatch({ type: actionTypes.LOGIN, payload: response });
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerAction = (name, email, password) => {
  return async (dispatch) => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (response) {
        response.user.updateProfile({
          displayName: name,
        });
      }
      dispatch({ type: actionTypes.REGISTER, payload: response });
    } catch (error) {
      console.log(error);
    }
  };
};

export const currentUserAction = () => {
  return async (dispatch) => {
    auth.onAuthStateChanged((user) =>
      dispatch({ type: actionTypes.CURRENT_USER, payload: user })
    );
  };
};

export const logoutAction = () => {
  return async (dispatch) => {
    await auth.signOut();
    dispatch({ type: actionTypes.LOGOUT });
  };
};
