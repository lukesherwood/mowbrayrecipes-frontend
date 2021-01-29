import axios from "axios";
import { NotificationManager } from 'react-notifications';
const WEB_URL = "https://mowbrayrecipes.herokuapp.com/api/v1/"

const setUser = (payload) => ({ type: "SET_USER", payload });

export const logUserOut = () => ({ type: "LOG_OUT" });

export const signUserUp = (userInfo) => (dispatch) => {
  axios
    .post(
      WEB_URL+"/users",
      { user: userInfo },
      { withCredentials: true }
    )
    .then((data) => { // can we create a method as its duplicated below
      const authHeader = data.headers.authorization;
      if (authHeader.startsWith("Bearer ")) {
        const token = authHeader.substring(7, authHeader.length);
        localStorage.setItem("token", token);
        dispatch(setUser(data.data));
        NotificationManager.success(`You have successfully signed up ${data.data.name}`, 'Successful!', 2000)
      }
    })
    .catch((error) =>
    NotificationManager.error(`Error while Creating new user!, ${error}`, 'Error!'));
};

export const fetchUser = (userInfo) => (dispatch) => {
  axios
    .post(
      WEB_URL+"/users/sign_in",
      { user: userInfo },
      { withCredentials: true }
    )
    .then((data) => {
      const authHeader = data.headers.authorization;
      if (authHeader.startsWith("Bearer ")) {
        const token = authHeader.substring(7, authHeader.length);
        localStorage.setItem("token", token);
        dispatch(setUser(data.data));
        NotificationManager.success(`You have successfully logged in ${data.data.name}`, 'Successful!', 2000)
      }
    })
    .catch((error) => NotificationManager.error(`Error while signing in!, ${error}`, 'Error!'));
};

export const autoLogin = () => (dispatch) => {
    const token = localStorage.token;
    if (token) {
      axios.get(WEB_URL+"/users/auto_login", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((data) => {
          if (!data.data.data) { // something goes wrong here
            NotificationManager.error(`Error while signing in! ${data.message}`, 'Error!')
            localStorage.removeItem("token");
          } else {
            dispatch(setUser(data.data));
            NotificationManager.success(`Welcome back, ${data.data.data.attributes.name}`, 'Successful!', 2000)
          }
        });
    }
  };


