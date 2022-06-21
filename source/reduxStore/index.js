import reducers from "../reducers";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(createLogger());
}

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
