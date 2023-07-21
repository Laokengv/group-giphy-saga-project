const giphyReducer = (state = [], action) => {
    if (action.type === "SET_GIPHYS") {
        return action.payload
    }
    return state;
};

export default giphyReducer;
