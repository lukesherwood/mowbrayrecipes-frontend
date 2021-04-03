import axios from "axios";
import { NotificationManager } from "react-notifications";
import { config } from "../Constants";
const WEB_URL = config.url.API_URL;

// const WEB_URL = "https://mowbrayrecipes.herokuapp.com/api/v1/"

const setUser = (payload) => ({ type: "SET_USER", payload });

export const logUserOut = () => ({ type: "LOG_OUT" });

export const signUserUp = (userInfo, ownProps) => (dispatch) => {
  axios
    .post(WEB_URL + "/users", { user: userInfo }, { withCredentials: true })
    .then((data) => {
      // can we create a method as its duplicated below
      const authHeader = data.headers.authorization;
      if (authHeader.startsWith("Bearer ")) {
        const token = authHeader.substring(7, authHeader.length);
        localStorage.setItem("token", token);
        dispatch(setUser(data.data));
        NotificationManager.success(
          `You have successfully signed up ${data.data.name}`,
          "Successful!",
          2000
        );
      }
    })
    .catch((error) =>
      NotificationManager.error(
        `Error while Creating new user!, ${error}`,
        "Error!"
      )
    );
};

export const fetchUser = (userInfo, ownProps) => (dispatch) => {
  axios
    .post(
      WEB_URL + "/users/sign_in",
      { user: userInfo },
      { withCredentials: true }
    )
    .then((data) => {
      const authHeader = data.headers.authorization;
      if (authHeader.startsWith("Bearer ")) {
        const token = authHeader.substring(7, authHeader.length);
        localStorage.setItem("token", token);
        dispatch(setUser(data.data));
        NotificationManager.success(
          `You have successfully logged in ${data.data.name}`,
          "Successful!",
          2000
        );
      }
    })
    .catch((error) =>
      NotificationManager.error(`Error while signing in!, ${error}`, "Error!")
    );
};

export const autoLogin = () => (dispatch) => {
  const token = localStorage.token;
  if (token) {
    axios
      .get(WEB_URL + "/users/auto_login", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        if (data.data.message) {
          NotificationManager.error(
            `Error while signing in! ${data.data.message}`,
            "Error!"
          );
          localStorage.removeItem("token");
        } else if (data.data.id) {
          dispatch(setUser(data.data));
        }
      })
      .catch((error) => {
        NotificationManager.error(
          `Error while signing in, please try again`,
          "Error!"
        );
        localStorage.removeItem("token");
      });
  }
};
