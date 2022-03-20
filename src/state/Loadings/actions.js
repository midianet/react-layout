import * as LoadingTypes from "./types";

export const addLoading = loading => ({
    type: LoadingTypes.ADD_LOADING,
    payload: {value: loading}
});

export const removeLoading = {
    type: LoadingTypes.REMOVE_LOADING
}