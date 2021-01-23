import { NotificationManager } from "react-notifications";

const axios = require("axios").default;

export const fetchRecipes = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_RECIPES" });
    axios
      .get("http://localhost:3001/api/v1/recipes", {
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
      .get("http://localhost:3001/api/v1/userRecipes", {
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
        "http://localhost:3001/api/v1/recipes",
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
        `http://localhost:3001/api/v1/recipes/${recipeInfo.id}`,
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
    fetch(`http://localhost:3001/api/v1/recipes/${inputRecipe.id}`, {
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
