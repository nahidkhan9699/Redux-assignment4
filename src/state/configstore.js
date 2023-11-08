import { createStore,combineReducers } from "redux";
import { colorReducer } from "./reducer/colorsReducer";
export const configstore=()=>{
    const store=createStore(
        combineReducers({colorReducer}),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );
    return store;
}