import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
import thunk from "redux-thunk";

import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";

const inialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// thunk
// const store = createStore(
//   rootReducer,
//   storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
// );

// saga
const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(forbiddenWordsMiddleware, inialiseSagaMiddleware)
  )
);

inialiseSagaMiddleware.run(apiSaga);

export default store;
