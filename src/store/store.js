import { createStore } from "redux";
import usersReducer from "../reducers/users";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(usersReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log("store data:", store.getState());
});

export default store;
