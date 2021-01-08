const recipesReducer = (state = { recipes: [], loading: false }, action) => {
    switch(action.type) {
        case 'ADD_RECIPES':
            return {
                ...state, 
                recipes: action.recipes, 
                loading: false
            }
        case 'LOADING_RECIPES':
            return {
                ...state, 
                recipes: [...state.recipes],
                loading: true
            }
        case 'ADD_RECIPE':
            return {
                ...state,
                loading: false,
                recipes: [...state.recipes, action.recipe]
            }
        default:
            return state
    }
}
export default recipesReducer