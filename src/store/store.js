import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./reducers/authReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducers = combineReducers({ authReducer })

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store