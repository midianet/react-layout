import * as MessageTypes from "./types";

const initialState = {
    values: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MessageTypes.ADD_MESSAGE:
            return {
                ...state,
                values: [...state.values, action.payload.value]
            };
        case MessageTypes.REMOVE_ALL_MESSAGE:
            return initialState;
        case MessageTypes.REMOVE_MESSAGE:
            const values = state.values;
            const index = action.index;
            const messages = values.filter(item => {
               return item !== values[index]
            });
            return {
                values: messages
            }
        default:
            throw new Error();
    }
};

export default reducer;