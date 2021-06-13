import {combineReducers} from "redux";
import textBlockReducer from "./reducers/textBlock";


const rootReducer = combineReducers({
    blocks:textBlockReducer
});

export default rootReducer;