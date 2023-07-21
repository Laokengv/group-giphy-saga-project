const favoriteListReducer = (state = [], action) => {
    if (action.type === "ADD_FAVORITE") {
        return [...state, action.payload]
    }
    return state;
};

export default favoriteListReducer;

