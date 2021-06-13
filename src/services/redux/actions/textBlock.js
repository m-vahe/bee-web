import {ADD_BLOCK, DND_BLOCK} from "../action-types/textBlock";

export const addBlockAction = (text) =>{
    return dispatch => {
        dispatch({
            type: ADD_BLOCK,
            payload: text
        });
    };
}

export const dragAndDropAction = (data) =>{
    return dispatch =>{
        dispatch(
            {
                type:DND_BLOCK,
                payload:data
            }
        )
    }
}