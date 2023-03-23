import { combineReducers } from "@reduxjs/toolkit";
import pageSettingsReducer from "./reducers/pageSettingsReducer"

const rootReducer = combineReducers({
    pageSettingsReducer
});

export default rootReducer