import { NotificationManager } from "react-notifications";

const axios = require("axios").default;
const WEB_URL = "https://mowbrayrecipes.herokuapp.com/api/v1/"

export const fetchRecipes = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_RECIPES" });
    axios
      .get(WEB_URL+"/recipes", {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
      .then((data) => {
        dispatch({ type: "ADD_RECIPES", recipes: data.data.data });
      })
      .catch(function (error) {
        NotificationManager.error(
          `Error while fetching recipes!, ${error}`,
          "Error!"
        );
      });
  };
};

export const fetchUserRecipes = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_RECIPES" });
    axios
      .get(WEB_URL+"/userRecipes", {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
      .then((data) => {
        dispatch({ type: "ADD_RECIPES", recipes: data.data.data });
      })
      .catch(function (error) {
        NotificationManager.error(
          `Error while fetching recipes!, ${error}`,
          "Error!"
        );
      });
  };
};

export const createRecipe = (recipeInfo) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_RECIPES" });
    axios
      .post(
        WEB_URL+"/recipes",
        { recipe: recipeInfo },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        }
      )
      .then((data) => {
        dispatch({ type: "ADD_RECIPE", recipe: data.data.data });
      })
      .catch(function (error) {
        NotificationManager.error(
          `Error while creating new recipe!, ${error}`,
          "Error!"
        );
      });
  };
};

export const updateRecipe = (recipeInfo) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_RECIPES" });
    axios
      .patch(
        WEB_URL+`/recipes/${recipeInfo.id}`,
        { recipe: recipeInfo },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        }
      )
      .then((data) => {
        dispatch({ type: "UPDATE_RECIPE", recipe: data.data.data });
        // push to new recipe show page??
      })
      .catch(function (error) {
        NotificationManager.error(
          `Error while creating new recipe!, ${error}`,
          "Error!"
        );
      });
  };
};

export const deleteRecipe = (inputRecipe) => {
  const data = { recipe: inputRecipe };
  return (dispatch) => {
    fetch(WEB_URL+`/recipes/${inputRecipe.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({ type: "DELETE_RECIPE", recipe: inputRecipe });
        NotificationManager.success(
          `Successfully deleted your list, ${inputRecipe.attributes.name}`,
          "Success!"
        );
      })
      .catch(function (error) {
        NotificationManager.error(
          `Error while deleting list!, ${error}`,
          "Error!"
        );
      });
  };
};
