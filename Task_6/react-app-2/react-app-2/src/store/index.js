import {combineReducers, createStore} from "redux";
import { categoryReducer } from "./categoryReduser";
import { taskReducer } from "./taskReduser";

const rootReduser = combineReducers({
    categories : categoryReducer,
    tasks : taskReducer

})
export const store = createStore(rootReduser)