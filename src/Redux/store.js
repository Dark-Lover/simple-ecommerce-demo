import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./Item/ItemReducer";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
