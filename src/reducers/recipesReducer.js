const recipesReducer = (state = { recipes: [], loading: false }, action) => {
  switch (action.type) {
    case "ADD_RECIPES":
      return {
        ...state,
        recipes: action.recipes,
        loading: false,
      };
    case "LOADING_RECIPES":
      return {
        ...state,
        recipes: [...state.recipes],
        loading: true,
      };
    case "ADD_RECIPE":
      return {
        ...state,
        loading: false,
        recipes: [...state.recipes, action.recipe],
      };
    case "UPDATE_RECIPE":
      const index = state.recipes.findIndex(
        (recipe) => recipe.id === action.recipe.id
      );
      const newArray = [...state.recipes];
      newArray[index] = action.recipe;
      return {
        ...state,
        loading: false,
        recipes: newArray,
      };
    case "DELETE_RECIPE":
      return {
        ...state,
        recipes: state.recipes.filter((r) => r.id !== action.recipe.id),
        loading: false,
        error: "",
      };
    case "ADD_COMMENT":
        const recipeIndex = state.recipes.findIndex(
          (recipe) => recipe.id === action.recipe.id
        );
        const array = [...state.recipes];
        array[recipeIndex] = action.recipe;
        return {
          ...state,
          loading: false,
          recipes: array,
        };
    default:
      return state;
  }
};
export default recipesReducer;
