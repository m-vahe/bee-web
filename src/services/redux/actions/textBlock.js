import {ADD_BLOCK} from "../action-types/textBlock";

export const addBlockAction = (text) =>{
    return dispatch => {
        console.log(text,444444444444)
        dispatch({
            type: ADD_BLOCK,
            payload: text
        });
    };
}