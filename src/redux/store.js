// import { createStore, applyMiddleware } from "redux";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";
const SagaMiddelWare = createSagaMiddleware();
const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(SagaMiddelWare)),
);
SagaMiddelWare.run(rootSaga);
export default Store;
