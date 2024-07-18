import sreducer from "./secondCounter/scountReducer";
import countReducer from "./count/countReducer";
import { combineReducers } from "redux";

export default combineReducers({
    count: countReducer,
    scount: sreducer
})