import {ADD_BLOCK, DND_BLOCK} from "../action-types/textBlock";

const initialState = {
    textBlocks:[]
};

const textBlockReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_BLOCK:
            return {
                ...state,
                textBlocks: [...state.textBlocks,payload]
            }
        case DND_BLOCK:
            return {
                ...state,
                textBlocks: payload
            }
        default:
            return state;
    }
};

export default textBlockReducer;