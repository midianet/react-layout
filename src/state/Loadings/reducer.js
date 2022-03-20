import * as LoadingTypes from "./types"

const reducer = (state, action) => {
    switch (action.type) {
        case LoadingTypes.ADD_LOADING:
            return action.payload.value;
        case LoadingTypes.REMOVE_LOADING:
            return null;
        default:
            throw new Error();
    }
};

export default reducer;