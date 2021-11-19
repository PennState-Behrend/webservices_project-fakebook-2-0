import * as api from "../api";

export const signin = (formData, history) => async (dispatch) => {
  try {
    //Login the user with

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    //sign up the user
  } catch (error) {
    console.log(error);
  }
};
