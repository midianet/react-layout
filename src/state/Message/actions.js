import * as MessageTypes from "./types";
import * as OccurrenceType from "../../state/Message/occurrence-type";
import * as OccurrenceIcon from "../../state/Message/occurrence-icon";
import Occurrence from "./Occurrence";

export const addMessage = message => ({
    type: MessageTypes.ADD_MESSAGE,
    payload: {value: message}
});

export const addErrorMessage = (message, title) => ({
    type: MessageTypes.ADD_MESSAGE,
    payload: addPayload(message, title, OccurrenceType.DANGER, OccurrenceIcon.ERROR) 
});

export const addSucessMessage = (message, title) => ({
    type: MessageTypes.ADD_MESSAGE,
    payload: addPayload(message, title, OccurrenceType.SUCCESS, OccurrenceIcon.OK) 
});

export const addInfoMessage = (message, title) => ({
    type: MessageTypes.ADD_MESSAGE,
    payload: addPayload(message, title, OccurrenceType.INFO, OccurrenceIcon.ATTENTION) 
});

export const addWarningMessage = (message, title) => ({
    type: MessageTypes.ADD_MESSAGE,
    payload: addPayload(message, title, OccurrenceType.WARNING, OccurrenceIcon.WARNING) 
});

export const removeAllMessage = {
    type: MessageTypes.REMOVE_ALL_MESSAGE
};


export const removeMessage = index =>( {
    type: MessageTypes.REMOVE_MESSAGE,
    index: index
})

const addPayload = (message, title, type, icon) => {
    let occurrence = new Occurrence(type, title, message, icon);
    return {
        value: occurrence
    }
}